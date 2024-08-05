import {useState} from "react";
import './NavHeader.css'
import Logo from '../../src/assets/Logo.png'

export const NavHeader = () => {
    const [ isOpen , setIsOpen ] = useState (false)

  return (
    <header className='wrapContent bg1'>
        <nav className='nav-header'>
            <div>
                <img className='logo' src={Logo} alt="" />
            </div>
            <ul className={ `nav_items ${ isOpen && "open" }` }>
                <li><button className='btnHeader item'>Incio</button></li>
                <li><button className='btnHeader item'>Sobre mi</button></li>
                <li><button className='btnHeader item'>Portafolio</button></li>
                <li><button className='btnHeader item'>Servicios</button></li>
            </ul>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </nav>
    </header>
  )
}
