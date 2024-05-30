import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Committee from "./pages/Committee"
import Events from "./pages/Events"
import ContactUs from "./pages/ContactUs"

function App() {

  return (
    <>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/committee" element={ <Committee/> } />
        <Route path="/events" element= { <Events/>} />
        <Route path="/contact" element={ <ContactUs />} />
      </Routes>
    </>
  )
}

export default App
