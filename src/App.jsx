import { Route, Routes, Router, useLocation, Link } from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Events"
import ContactUs from "./pages/ContactUs"
import Gallery from "./pages/Gallery"
import Test from "./pages/Test"
import Footer from "./components/Footer"
import ExecutiveCommittee from "./pages/ExecutiveCommittee"
import OperatingCommittee from "./pages/OperatingCommittee"
import { useEffect } from "react"
import Blog from "./pages/Blog"

function App() {
  const location = useLocation();

  useEffect(() => {
    if(window.location.pathname === '/' && window.location.search == "?blog") {
      window.location.search = "";
      window.location.pathname = "/blog";
    }

  })

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (

    <div className="font-inter font-normal">
      <Routes>
        <Route path="/test" element={ <Test/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/events" element= { <Events/>} />
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/executivecommittee" element={ <ExecutiveCommittee/> } />
        <Route path="/operatingcommittee" element={ <OperatingCommittee/> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/contactus" element={ <ContactUs />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
