import { useEffect, useRef } from 'react'

const GLYPHS = '01アイウエオカキクケコサシスセソタチツテト0x1F<>/{}[]GL!TCH'
const DURATION_MS = 8000

// Pioggia di codice sopra il terminale: si ferma da sola dopo 8 secondi, o con un tocco.
// Il conto alla rovescia parte una volta sola: un nuovo render del terminale non la fa ripartire.
export const MatrixRain = ({ onStop, hint }: { onStop: () => void; hint: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const onStopRef = useRef(onStop)
  onStopRef.current = onStop

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const parent = canvas.parentElement as HTMLElement
    const size = 16
    let drops: number[] = []
    const resize = () => {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      drops = Array.from({ length: Math.ceil(canvas.width / size) }, () => Math.floor(Math.random() * -40))
    }
    resize()
    const green = getComputedStyle(document.documentElement).getPropertyValue('--neon-green').trim()
    let frame = 0
    let last = 0
    const start = performance.now()
    const draw = (now: number) => {
      if (now - start > DURATION_MS) {
        onStopRef.current()
        return
      }
      frame = requestAnimationFrame(draw)
      if (now - last < 50) return
      last = now
      ctx.fillStyle = 'rgba(0,0,0,0.12)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${size}px "IBM Plex Mono", monospace`
      drops.forEach((y, i) => {
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        ctx.fillStyle = Math.random() > 0.96 ? '#ffffff' : `hsl(${green})`
        ctx.fillText(ch, i * size, y * size)
        drops[i] = y * size > canvas.height && Math.random() > 0.975 ? 0 : y + 1
      })
    }
    frame = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div onPointerDown={() => onStopRef.current()} className="absolute inset-0 bg-black cursor-pointer">
      <canvas ref={canvasRef} aria-hidden="true" className="block w-full h-full" />
      <p className="pointer-events-none absolute bottom-3 inset-x-0 text-center font-mono text-xs text-muted-foreground">
        <span className="bg-black/80 px-2 py-1">{hint}</span>
      </p>
    </div>
  )
}
