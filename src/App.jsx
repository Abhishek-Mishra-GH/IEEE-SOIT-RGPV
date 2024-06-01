import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Committee from "./pages/Committee"
import Event from "./pages/Event"
import ContactUs from "./pages/ContactUs"
import Gallery from "./pages/Gallery"
import Test from "./pages/Test"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Routes>
        <Route path="/test" element={ <Test/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/event" element= { <Event/>} />
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/committee" element={ <Committee/> } />
        <Route path="/contactus" element={ <ContactUs />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
