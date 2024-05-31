import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Committee from "./pages/Committee"
import Events from "./pages/Events"
import ContactUs from "./pages/ContactUs"
import About from "./pages/About"
import Gallery from "./pages/Gallery"

function App() {

  return (
    <>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/events" element= { <Events/>} />
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/committee" element={ <Committee/> } />
        <Route path="/contactus" element={ <ContactUs />} />
      </Routes>
      
    </>
  )
}

export default App
