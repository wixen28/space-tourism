
import './Crew.css'
import crewData from '../dataCrew'
import { Link } from "react-router-dom"
import {useState} from 'react'


const Crew = () => {
    const [ selectCrew, setSelectedCrew] = useState(crewData[0])

    const handleClick = (id) => {
        setSelectedCrew( crewData.find( crew => crew.id === id))
    } 

  return <div id='crew'>
        <h2 className="crew-header"><span className="crew-span">02</span>meet your crew</h2>
        <div className="crew-part">
        {
            selectCrew && (
                <div className="crew-info">
                <div className="crew-about">
                    <h2 className="crew-job">{selectCrew.role}</h2>
                    <h1 className="crew-name">{selectCrew.name}</h1>
                    <p className="crew-paragraph">{selectCrew.bio}</p>
                </div>
                <img src={selectCrew.images.webp} alt="" className="crew-image" />
            </div>
            )
        }
        </div>
        <div className="crew-btns">
        {
            crewData.map( oneCrewData=> (
                <button className='crew-btn' key={oneCrewData.id} onClick={ () => handleClick(oneCrewData.id)}></button>
 
            ))
        }
        </div>
    </div>
}

export default Crew