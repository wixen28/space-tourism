
import './Technology.css'
import technologyData from '../technologyData'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Technology = () => {
  const [selectTechnology, setSelectTechnology] = useState(technologyData[0])

  const handleClick = (id) => {
    setSelectTechnology( technologyData.find( technology => technology.id === id))
  }
  
  return <div id='technology'>
    <h2 className="technology-header"><span className="technology-span">03</span>space launch 101</h2>
    <div className="technology-part">
      <div className="techno-text-btns">
        <div className="techno-btns">
          {
            technologyData.map( (technology) => {
              return <button className='techno-btn' key={technology.id} onClick={ () => handleClick(technology.id)}>{technology.id + 1}</button>
            })
          }

        </div>
        <div className="techno-text">
          <p className="the-techno">the terminology...</p>
            {
              selectTechnology && (
                <div className="techno-data">
                  <h1 className="techno-header">{selectTechnology.name}</h1>
                  <p className="techno-para">{selectTechnology.description}</p>
                </div>
              )
            }
        </div>
      </div>
      {
        selectTechnology && (
          <div className="techno-images">
            <img src={selectTechnology.images.portrait} alt="" className='techno-img'/>
            <img src={selectTechnology.images.landscape}  alt="" className='techno-img-landscape' />
          </div>
      
          )
      }
      
    </div>
  </div>
}

export default Technology