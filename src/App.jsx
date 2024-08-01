import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Events"
import ContactUs from "./pages/ContactUs"
import Gallery from "./pages/Gallery"
import Test from "./pages/Test"
import Footer from "./components/Footer"
import ExecutiveCommittee from "./pages/ExecutiveCommittee"
import OperatingCommittee from "./pages/OperatingCommittee"

function App() {

  return (
    <div className="font-inter font-normal">
      <Routes>
        <Route path="/test" element={ <Test/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/events" element= { <Events/>} />
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/executivecommittee" element={ <ExecutiveCommittee/> } />
        <Route path="/operatingcommittee" element={ <OperatingCommittee/> } />
        <Route path="/contactus" element={ <ContactUs />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
