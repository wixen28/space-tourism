
import './Navbar.css' 
import {useState} from 'react'
import logo from '../design/logo.svg'
import menu from '../design/icon-hamburger.svg'
import closeMenu from '../design/icon-close.svg'
import { Link } from "react-router-dom"

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false)

  const showingMenu = () => {
    setShowMenu(!showMenu)
    setActiveMenu(!activeMenu)
  }

  return <div id='navbar'>
    <nav className='navbar'>
        <img src={logo} alt="" className='logo' />
        <hr />
        <div className="desktop-menu">
            <Link className='desktop-item' activeclass='active' to='/' spy='true' smooth='true' offset={-100}><span className='menu-number'>00</span> HOME</Link>
            <Link className='desktop-item' activeclass='active' to='/destination' spy='true' smooth='true' offset={-100}><span className='menu-number'>01</span> DESTINATION</Link>
            <Link className='desktop-item' activeclass='active' to='/crew' spy='true'smooth='true' offset={-100}><span className='menu-number'>02</span>  CREW</Link>
            <Link className='desktop-item' activeclass='active' to='/technology' spy='true' smooth='true' offset={-100}><span className='menu-number'>03</span>  TECHNOLOGY</Link>
        </div>

        {/* Mobile Menu */}
        <img  alt="menu" className="hamburger" onClick={showingMenu} src={activeMenu ? closeMenu : menu} />
        <div className="mobile-menu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link className='mobile-item' activeclass='active' to='/' spy='true' smooth='true' offset={-100}><span className='menu-number'>00</span> HOME</Link>
            <Link className='mobile-item' activeclass='active' to='/destination' spy='true'smooth='true' offset={-100}><span className='menu-number'>01</span> DESTINATION</Link>
            <Link className='mobile-item' activeclass='active' to='/crew' spy='true' smooth='true' offset={-100}><span className='menu-number'>02</span>  CREW</Link>
            <Link className='mobile-item' activeclass='active' to='/technology' spy='true' smooth='true' offset={-100}><span className='menu-number'>03</span>  TECHNOLOGY</Link>
        </div>
    </nav>
  </div>
  
}

export default Navbar

// <img alt="menu" className='menu' onClick={showingMenu} src={activeMenu ? closeMenu : menu}/>
//         <div className='nav-menu' style={{display: showMenu? 'flex' : 'none'}} >
//             <Link className='mobile-item'  activeClass='active' to='home' spy={true} smooth={true} offset={-100}><GrHomeRounded id='home-logo' fill='white' onClick={ () => setShowMenu(false) }/></Link>
//             {/* <Link className='mobile-item' onClick={ () => setShowMenu(false) }>about</Link> */}
//             <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} className='mobile-item' onClick={ () => setShowMenu(false) } >skills</Link>
//             <Link  activeClass='active' to='projects' spy={true} smooth={true} offset={-100} className='mobile-item' onClick={ () => setShowMenu(false) }>projects</Link>
//             <Link className='mobile-item' onClick={ () => setShowMenu(false) }>socials</Link>
//         </div> 