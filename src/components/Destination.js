import { Link } from "react-router-dom"
import destinationData from '../data'
import './Destination.css'
import {useState} from 'react'


const Destination = () => {
  const [selectDestination, setSelectDestination] = useState(destinationData[0])

  const handleClick = (id) => {
    setSelectDestination(destinationData.find(dest => dest.id === id) )
  } 

  return <div id='destination'>
    <h2 className="dest-header"><span className="dest-span">01</span>pick your destination</h2>
    <div className="second-part-destination">
        {destinationData.map( destination => (
            <button className="dest-btn" key={destination.id} onClick={ () => handleClick(destination.id)}>{destination.name}</button>
          ))}
            {
            selectDestination && (
            <div className="planet-info" >
              <img src={selectDestination.images.webp} alt="" className="images"/>
              <div className="planet-description">
              <h1>{selectDestination.name}</h1>
                  <p className="destination-paragraph">{selectDestination.description}</p>
                  <hr className="dest-hr"/>
                  <div className="avg-distance">
                    <div className="avg">
                      <p className="avg-para">AVG. DISTANCE</p>
                      <p className="distance">{selectDestination.distance}</p>
                    </div>  
                    <div className="est">
                      <p className="est-para">EST. TRAVEL TIME</p>
                      <p className="distance">{selectDestination.travel}</p>
                  </div>  
                </div> 
              </div>
            </div>
            )}
    </div>
    
    </div>

}

export default Destination