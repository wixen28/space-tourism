
import './Home.css'
import './Destination'
import {useState} from 'react'
import { Link } from "react-router-dom"
import Destination from './Destination';



const Home = () => {
  
 
  return <div id='home'>
    <div className="first-part">
      <p className="first-line">so, you want to travel to</p>
      <h1 className="space-line">space</h1>
      <p className="last-line">Let’s face it; if you want to go to space, 
      you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll 
      give you a truly out of this world experience!</p>
    </div>
    <div className="second-part">
      <Link to="/destination"> <button className="explore-btn">EXPLORE</button></Link>
    </div>
  </div>
}

export default Home