import Home from "./pages/Home"
import Services from "./pages/Services"
// import AboutUs from "./pages/AboutUs"
// import ContactUs from "./pages/ContactUs"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/services" element={<Services />}></Route>
                        {/* <Route path="/aboutus" element={<AboutUs />}></Route> */}
                        {/* <Route path="/contact" element={<ContactUs />}></Route> */}
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App
