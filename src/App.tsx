import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import { ScrollToTop } from './components/ScrollToTop'
import { IntroOnce } from './components/IntroOnce'
import { NerdMode } from './components/nerd/NerdMode'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <IntroOnce>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </IntroOnce>
      <NerdMode />
    </BrowserRouter>
  )
}

export default App
