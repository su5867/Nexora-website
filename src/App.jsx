import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Pricing from "@/pages/Pricing"
import About from "@/pages/About"
import Contact from "@/pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
