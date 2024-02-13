
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Destination from "./components/Destination"
import Crew from "./components/Crew"
import Technology from "./components/Technology"

const App = () => {
  return <BrowserRouter>
  < Navbar /> 
  <Routes>
    <Route path="/" element={< Home />} />
    <Route path="/destination" element={ < Destination />} />
    <Route path="/crew" element={ < Crew />} />
    <Route path="/technology" element={ < Technology />} />
  </Routes>
</BrowserRouter>

}

export default App