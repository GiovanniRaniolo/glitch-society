import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'
import { nerdContent as t } from '@/content/nerd'
import { heroContent } from '@/content/hero'
import { manifestoContent } from '@/content/manifesto'
import { ethicsContent } from '@/content/ethics'
import { featuredCourseContent as ev } from '@/content/featuredCourse'
import { communityContent } from '@/content/community'
import { partnersContent } from '@/content/partners'
import { siteContent } from '@/content/site'
import { NERD_EVENT } from './openNerdMode'
import { MatrixRain } from './MatrixRain'

type Line = { id: number; node: ReactNode }

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

const SECTIONS: Record<string, string> = {
  evento: ev.anchor,
  event: ev.anchor,
  mission: 'mission',
  etica: 'etica',
  ethics: 'etica',
  community: 'community',
  partner: partnersContent.anchor,
  partners: partnersContent.anchor,
  home: '',
}

const FILES: Record<string, string> = {
  'chi-siamo.txt': 'chi-siamo',
  'mission.txt': 'mission',
  'etica.txt': 'etica',
  'evento.txt': 'evento',
  'community.txt': 'community',
  'partner.txt': 'partner',
  'contatti.txt': 'contatti',
  '.birra': 'birra',
}

const ALIASES: Record<string, string> = {
  aiuto: 'help',
  '?': 'help',
  about: 'chi-siamo',
  ethics: 'etica',
  event: 'evento',
  contact: 'contatti',
  partners: 'partner',
  join: 'entra',
  goto: 'vai',
  cd: 'vai',
  beer: 'birra',
  cls: 'clear',
  quit: 'exit',
  logout: 'exit',
  q: 'exit',
}

const COMMANDS = [
  'help',
  'chi-siamo',
  'mission',
  'etica',
  'evento',
  'community',
  'partner',
  'contatti',
  'entra',
  'mail',
  'vai',
  'ls',
  'cat',
  'whoami',
  'date',
  'echo',
  'history',
  'glitch',
  'matrix',
  'birra',
  'sudo',
  'rm',
  'clear',
  'exit',
]

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const isTyping = (target: EventTarget | null) => {
  const el = target as HTMLElement | null
  if (!el) return false
  return el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName)
}

let lineId = 0
const line = (node: ReactNode): Line => ({ id: ++lineId, node })

export const NerdMode = () => {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [matrix, setMatrix] = useState(false)
  const [glitching, setGlitching] = useState(false)
  const history = useRef<string[]>([])
  const historyIndex = useRef(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const timers = useRef<number[]>([])
  const navigate = useNavigate()
  const location = useLocation()

  const print = useCallback((...nodes: ReactNode[]) => {
    setLines((prev) => [...prev, ...nodes.map(line)])
  }, [])

  const stopMatrix = useCallback(() => {
    setMatrix(false)
    print(<span className="text-muted-foreground">{t.matrixStop}</span>)
  }, [print])

  const close = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    setMatrix(false)
    setOpen(false)
    if (window.location.hash === '#nerd') window.history.replaceState(null, '', window.location.pathname)
  }, [])

  const openTerminal = useCallback(() => {
    setOpen((already) => {
      if (already) return already
      returnFocus.current = document.activeElement as HTMLElement | null
      return true
    })
  }, [])

  // Attivazione: Konami, «nerd» scritto sulla pagina, tasto ` o ~, #nerd, evento dal cursore del titolo
  useEffect(() => {
    let konami = 0
    let typed = ''
    const onKey = (e: KeyboardEvent) => {
      if (open || isTyping(e.target) || e.metaKey || e.ctrlKey || e.altKey) return
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      konami = key === KONAMI[konami] ? konami + 1 : key === KONAMI[0] ? 1 : 0
      typed = (typed + (key.length === 1 ? key : ' ')).slice(-4)
      if (konami === KONAMI.length || typed === 'nerd' || key === '`' || key === '~') {
        konami = 0
        typed = ''
        e.preventDefault()
        openTerminal()
      }
    }
    const onHash = () => {
      if (window.location.hash === '#nerd') openTerminal()
    }
    onHash()
    window.addEventListener('keydown', onKey)
    window.addEventListener('hashchange', onHash)
    window.addEventListener(NERD_EVENT, openTerminal)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener(NERD_EVENT, openTerminal)
    }
  }, [open, openTerminal])

  // All'apertura: blocca lo scorrimento della pagina, avvio, focus sulla riga di comando
  useEffect(() => {
    if (!open) return
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    setLines([])
    setInput('')
    const boot = [...t.boot.map((text) => <span className="text-muted-foreground">{text}</span>), <Banner />, <span>{t.welcome}</span>]
    if (prefersReducedMotion()) {
      print(...boot)
    } else {
      boot.forEach((node, i) => {
        timers.current.push(window.setTimeout(() => print(node), 120 * i))
      })
    }
    if (window.matchMedia('(pointer: fine)').matches) inputRef.current?.focus()
    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
      document.body.style.overflow = overflow
      returnFocus.current?.focus?.()
    }
  }, [open, print])

  useEffect(() => {
    const el = outputRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  const openExternal = useCallback(
    (url: string, label: string) => {
      print(<span className="text-muted-foreground">{t.opening(label)}</span>)
      if (url.startsWith('mailto:')) window.location.href = url
      else window.open(url, '_blank', 'noopener,noreferrer')
    },
    [print],
  )

  const goTo = useCallback(
    (where: string) => {
      const anchor = SECTIONS[where]
      if (anchor === undefined) {
        print(<span className="text-neon-pink">{where ? t.gotoMissing(where) : t.gotoUsage}</span>)
        return
      }
      close()
      const scroll = () => {
        const behavior = prefersReducedMotion() ? 'auto' : 'smooth'
        if (!anchor) window.scrollTo({ top: 0, behavior })
        else document.getElementById(anchor)?.scrollIntoView({ behavior })
      }
      if (location.pathname !== '/') {
        navigate('/')
        window.setTimeout(scroll, 150)
      } else {
        window.setTimeout(scroll, 50)
      }
    },
    [close, location.pathname, navigate, print],
  )

  const run = useCallback(
    (raw: string) => {
      const text = raw.trim()
      print(<Prompt command={raw} />)
      if (!text) return
      history.current = [...history.current.filter((h) => h !== text), text]
      historyIndex.current = -1
      const [first, ...args] = text.split(/\s+/)
      const name = ALIASES[first.toLowerCase()] ?? first.toLowerCase()
      const arg = args.join(' ').toLowerCase()
      const cmd = (c: string) => <Cmd name={c} onRun={run} />

      switch (name) {
        case 'help':
          print(
            ...t.help.map((h) => (
              <span className="grid grid-cols-[7.5rem_1fr] sm:grid-cols-[9rem_1fr] gap-x-3">
                <span>{cmd(h.cmd)}</span>
                <span className="min-w-0 break-words text-muted-foreground">{h.text}</span>
              </span>
            )),
            <span className="text-muted-foreground">{t.helpFooter}</span>,
          )
          break
        case 'chi-siamo':
          print(
            <Title>
              {heroContent.title.part1} {heroContent.title.highlight}. {heroContent.title.part2}.
            </Title>,
            <span>{heroContent.subtitle}.</span>,
            <span className="text-muted-foreground">{heroContent.description}</span>,
            <span className="text-primary">{heroContent.essence.title}</span>,
            ...heroContent.essence.values.map((v) => (
              <span>
                <span className="text-neon-green">
                  {'> '}
                  {v.title}
                </span>
                <span className="text-muted-foreground"> {v.description}</span>
              </span>
            )),
          )
          break
        case 'mission':
          print(
            <Title>{manifestoContent.mission.title}</Title>,
            <span className="text-muted-foreground">{manifestoContent.mission.description}</span>,
            ...manifestoContent.columns.flatMap((c) => [
              <span className="text-primary mt-2 block">## {c.title}</span>,
              <span className="text-muted-foreground">{c.description}</span>,
              ...c.principles.map((p) => (
                <span>
                  <span className="text-neon-green">
                    {'  > '}
                    {p.title}
                  </span>
                  <span className="text-muted-foreground"> {p.description}</span>
                </span>
              )),
            ]),
            <span>Hai un progetto? Scrivi {cmd('mail')}.</span>,
          )
          break
        case 'etica':
          print(
            <Title>{ethicsContent.title}</Title>,
            <span className="text-muted-foreground">{ethicsContent.description}</span>,
            ...ethicsContent.blocks.flatMap((b) => [
              <span className="text-primary mt-2 block">$ {b.command}</span>,
              ...b.items.map((i) => (
                <span>
                  <span className={b.tone === 'always' ? 'text-neon-green' : 'text-neon-pink'}>
                    {b.tone === 'always' ? '+ ' : '− '}
                    {i.title}
                  </span>
                  <span className="text-muted-foreground"> {i.description}</span>
                </span>
              )),
            ]),
          )
          break
        case 'evento': {
          const d = ev.details
          print(
            <span className="text-muted-foreground">{ev.statusLines.join('  ·  ')}</span>,
            <Title>
              {ev.title.line1} <span className="text-neon-pink">{ev.title.line2}</span>{' '}
              <span className="text-neon-green">{ev.title.line3}</span>
            </Title>,
            <span>{ev.subtitle}</span>,
            ...[d.date, d.location, d.format, d.entry].map((x) => (
              <span className="grid grid-cols-[6.5rem_1fr] gap-x-3">
                <span className="text-primary">{x.label}</span>
                <span>
                  {x.value} <span className="text-muted-foreground">({x.subvalue})</span>
                </span>
              </span>
            )),
            ...ev.notices.map((n) => (
              <span>
                <span className="text-neon-green">[{n.label}]</span> {n.text}
              </span>
            )),
            <span>
              Locandina:{' '}
              <a className="text-primary underline underline-offset-4" href={ev.poster.full} target="_blank" rel="noopener noreferrer">
                {ev.poster.full.slice(1)}
              </a>
              . Vuoi vederlo nella pagina? {cmd('vai evento')}
            </span>,
          )
          break
        }
        case 'community':
          print(
            <Title>{communityContent.hero.title}</Title>,
            <span className="text-muted-foreground">{communityContent.telegram.description}</span>,
            <span>
              <a
                className="text-primary underline underline-offset-4"
                href={communityContent.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {communityContent.telegram.url.replace('https://', '')}
              </a>{' '}
              oppure scrivi {cmd('entra')}.
            </span>,
          )
          break
        case 'partner':
          print(
            <Title>{partnersContent.title}</Title>,
            <span className="text-muted-foreground">{partnersContent.description}</span>,
            ...partnersContent.partners.flatMap((p) => [
              <span className="text-neon-green mt-2 block">
                {'> '}
                {p.name} <span className="text-muted-foreground">({p.place})</span>
              </span>,
              <span className="text-muted-foreground">{p.description}</span>,
              <a className="text-primary underline underline-offset-4" href={p.url} target="_blank" rel="noopener noreferrer">
                {new URL(p.url).hostname}
              </a>,
            ]),
            <span>Vuoi vederli nella pagina? {cmd('vai partner')}</span>,
          )
          break
        case 'contatti':
          print(
            <span>
              Email:{' '}
              <a className="text-primary underline underline-offset-4" href={`mailto:${siteContent.contactEmail}`}>
                {siteContent.contactEmail}
              </a>
            </span>,
            <span>
              Instagram:{' '}
              <a
                className="text-primary underline underline-offset-4"
                href={siteContent.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteContent.instagramUrl.replace('https://www.', '')}
              </a>
            </span>,
            <span className="text-muted-foreground">Per scriverci subito: {cmd('mail')}</span>,
          )
          break
        case 'entra':
          openExternal(communityContent.telegram.url, 'il canale Telegram')
          break
        case 'mail':
          openExternal(`mailto:${siteContent.contactEmail}`, 'la tua app di posta')
          break
        case 'vai':
          goTo(arg === '..' || arg === '~' ? 'home' : arg)
          break
        case 'ls': {
          const all = arg.includes('-a')
          const files = Object.keys(FILES).filter((f) => all || !f.startsWith('.'))
          print(
            <span className="flex flex-wrap gap-x-6 gap-y-1">
              {files.map((f) => (
                <Cmd key={f} name={`cat ${f}`} label={f} onRun={run} />
              ))}
            </span>,
          )
          break
        }
        case 'cat': {
          const file = args[0]
          if (!file) print(<span className="text-neon-pink">{t.catUsage}</span>)
          else if (FILES[file]) run(FILES[file])
          else print(<span className="text-neon-pink">{t.catMissing(file)}</span>)
          break
        }
        case 'whoami':
          print(
            <span>
              {t.whoami}{' '}
              {cmd('entra')}.
            </span>,
          )
          break
        case 'date':
          print(<span>{new Date().toLocaleString('it-IT', { dateStyle: 'full', timeStyle: 'short' })}</span>)
          break
        case 'echo':
          print(<span>{args.join(' ')}</span>)
          break
        case 'history':
          print(
            ...history.current.map((h, i) => (
              <span>
                <span className="text-muted-foreground">{String(i + 1).padStart(3, ' ')} </span>
                {cmd(h)}
              </span>
            )),
          )
          break
        case 'glitch':
          if (prefersReducedMotion()) {
            print(<span className="text-muted-foreground">{t.reducedMotion}</span>)
          } else {
            setGlitching(true)
            window.setTimeout(() => setGlitching(false), 900)
            print(<span className="glitch-text inline-block text-neon-pink">ERR0R: r3al1ty.exe h4s st0pp3d w0rk1ng</span>)
          }
          break
        case 'matrix':
          if (prefersReducedMotion()) print(<span className="text-muted-foreground">{t.reducedMotion}</span>)
          // dopo l'evento corrente: l'Invio che lancia matrix non deve anche fermarla
          else window.setTimeout(() => setMatrix(true), 0)
          break
        case 'birra':
          print(
            <pre className="text-primary leading-tight">{t.beer.join('\n')}</pre>,
            <span>
              {t.beerText}{' '}
              {cmd('evento')}.
            </span>,
          )
          break
        case 'sudo':
          print(<span className="text-neon-pink">{t.sudo}</span>)
          break
        case 'rm':
          print(<span className="text-neon-pink">{t.rm}</span>)
          break
        case 'clear':
          setLines([])
          break
        case 'exit':
          close()
          break
        default:
          print(<span className="text-neon-pink">{t.notFound(first)}</span>)
      }
    },
    [close, goTo, openExternal, print],
  )

  const complete = () => {
    const value = input.replace(/^\s+/, '')
    const parts = value.split(/\s+/)
    let options: string[]
    let prefix: string
    if (parts.length <= 1) {
      prefix = ''
      options = COMMANDS.filter((c) => c.startsWith(parts[0].toLowerCase()))
    } else {
      const head = ALIASES[parts[0].toLowerCase()] ?? parts[0].toLowerCase()
      const pool = head === 'cat' ? Object.keys(FILES) : head === 'vai' ? ['evento', 'mission', 'etica', 'community', 'partner', 'home'] : []
      prefix = parts.slice(0, -1).join(' ') + ' '
      options = pool.filter((p) => p.startsWith(parts[parts.length - 1]))
    }
    if (options.length === 1) setInput(prefix + options[0] + (parts.length <= 1 ? ' ' : ''))
    else if (options.length > 1) {
      print(<Prompt command={input} />, <span className="text-muted-foreground">{options.join('   ')}</span>)
      const common = options.reduce((a, b) => {
        let i = 0
        while (i < a.length && a[i] === b[i]) i++
        return a.slice(0, i)
      })
      setInput(prefix + common)
    }
  }

  const onInputKey = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (matrix) {
      e.preventDefault()
      return
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      run(input)
      setInput('')
    } else if (e.key === 'Tab') {
      e.preventDefault()
      complete()
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
      const h = history.current
      if (!h.length) return
      let i = historyIndex.current
      if (e.key === 'ArrowUp') i = i < 0 ? h.length - 1 : Math.max(0, i - 1)
      else i = i < 0 ? -1 : i + 1 >= h.length ? -1 : i + 1
      historyIndex.current = i
      setInput(i < 0 ? '' : h[i])
    } else if (e.ctrlKey && e.key.toLowerCase() === 'l') {
      e.preventDefault()
      setLines([])
    } else if (e.ctrlKey && e.key.toLowerCase() === 'c') {
      e.preventDefault()
      print(<Prompt command={`${input}^C`} />)
      setInput('')
    }
  }

  // Esc chiude (o ferma matrix); un tasto qualsiasi ferma matrix
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (matrix) {
        e.preventDefault()
        stopMatrix()
        return
      }
      if (e.key === 'Escape') close()
      else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey && !isTyping(e.target)) inputRef.current?.focus({ preventScroll: true })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, matrix, close, stopMatrix])

  if (!open) return null

  return (
    <div role="dialog" aria-modal="true" aria-label={t.dialogLabel} className="fixed inset-0 z-[100] bg-background bg-grid md:p-8">
      <div
        className={`nerd-window h-full max-w-6xl mx-auto flex flex-col border border-neon-green/50 bg-black ${glitching ? 'nerd-glitch' : ''}`}
      >
        <div className="flex items-center gap-3 border-b border-border bg-secondary px-3 py-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </span>
          <span className="flex-1 truncate text-center font-mono text-xs text-muted-foreground">{t.windowTitle}</span>
          <button
            type="button"
            onClick={close}
            aria-label={t.closeLabel}
            className="p-1 text-muted-foreground hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="relative flex-1 min-h-0">
          <div
            ref={outputRef}
            onClick={() => window.getSelection()?.isCollapsed && inputRef.current?.focus({ preventScroll: true })}
            className="h-full overflow-y-auto overscroll-contain p-4 md:p-6 font-mono text-[13px] md:text-sm leading-relaxed text-foreground"
            aria-live="polite"
          >
            {lines.map((l) => (
              <div key={l.id} className="whitespace-pre-wrap break-words">
                {l.node}
              </div>
            ))}
            <label className="flex items-baseline gap-2">
              <span className="shrink-0">
                <PromptLabel />
              </span>
              <span className="sr-only">{t.inputLabel}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onInputKey}
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                enterKeyHint="send"
                className="nerd-input flex-1 min-w-0 bg-transparent text-foreground caret-neon-green outline-none text-[16px] md:text-sm"
              />
            </label>
          </div>
          {matrix && <MatrixRain onStop={stopMatrix} hint={t.matrixHint} />}
        </div>

        <div className="flex gap-2 overflow-x-auto border-t border-border bg-card px-3 py-2 font-mono text-xs">
          {t.quick.map((q) => (
            <button
              key={q}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                // un comando toccato durante matrix la ferma e poi parte, visibile
                if (matrix) stopMatrix()
                run(q)
                setInput('')
              }}
              className="shrink-0 border border-border px-3 py-1.5 text-muted-foreground hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const PromptLabel = () => (
  <>
    <span className="text-neon-green">
      {t.user}@{t.host}
    </span>
    <span className="text-muted-foreground">:~$</span>
  </>
)

const Prompt = ({ command }: { command: string }) => (
  <span className="block mt-2">
    <PromptLabel /> <span>{command}</span>
  </span>
)

const Title = ({ children }: { children: ReactNode }) => (
  <span className="block font-display text-lg md:text-xl text-foreground mt-1">{children}</span>
)

const Cmd = ({ name, label, onRun }: { name: string; label?: string; onRun: (c: string) => void }) => (
  <button
    type="button"
    onMouseDown={(e) => e.preventDefault()}
    onClick={(e) => {
      e.stopPropagation()
      onRun(name)
    }}
    className="text-primary underline decoration-dotted underline-offset-4 hover:decoration-solid focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
  >
    {label ?? name}
  </button>
)

const ASCII_GLITCH = `   ██████╗ ██╗      ██║████████╗ ██████╗██╗  ██╗
  ██╔════╝ ██║      ██║╚══██╔══╝██╔════╝██║  ██║
  ██║  ███╗██║      ██║   ██║   ██║     ███████║
  ██║   ██║██║            ██║   ██║     ██╔══██║
  ╚██████╔╝███████╗ ██╗   ██║   ╚██████╗██║  ██║
   ╚═════╝ ╚══════╝ ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝`

const ASCII_SOCIETY = `  ███████╗ ██████╗  ██████╗██╗███████╗████████╗██╗   ██╗
  ██╔════╝██╔═══██╗██╔════╝██║██╔════╝╚══██╔══╝╚██╗ ██╔╝
  ███████╗██║   ██║██║     ██║█████╗     ██║    ╚████╔╝ 
  ╚════██║██║   ██║██║     ██║██╔══╝     ██║     ╚██╔╝  
  ███████║╚██████╔╝╚██████╗██║███████╗   ██║      ██║   
  ╚══════╝ ╚═════╝  ╚═════╝╚═╝╚══════╝   ╚═╝      ╚═╝`

// ASCII su schermi larghi (font di sistema: Plex Mono non ha i caratteri dei riquadri); font pixel su telefono
const Banner = () => (
  <Fragment>
    <span className="hidden sm:block font-ascii my-3 leading-none" aria-label="GL!TCH Society">
      <pre className="text-primary text-[12px] leading-[1.15]">{ASCII_GLITCH}</pre>
      <pre className="text-neon-pink text-[12px] leading-[1.15] mt-1">{ASCII_SOCIETY}</pre>
    </span>
    <span className="sm:hidden block font-display my-3 text-4xl leading-none" aria-label="GL!TCH Society">
      <span className="block text-primary">GL!TCH</span>
      <span className="block text-neon-pink">SOCIETY</span>
    </span>
  </Fragment>
)
