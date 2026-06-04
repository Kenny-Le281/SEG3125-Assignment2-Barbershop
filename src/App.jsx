import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Visit from './pages/Visit'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'

function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  )
}

export default App
