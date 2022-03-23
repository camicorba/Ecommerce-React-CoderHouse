import { Link } from 'react-router-dom'
import logoh1 from '../../images/logoh1.png'
import CartWidget from './CartWidget'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='menu-bar'>
            <div>
                <Link to={'/'}><img className='menu-logo' alt="logo" src={ logoh1 } /></Link>

            </div>
            <div className='menu'>
                <ul className='menu-list'>
                    <li className='menu-item'><Link to={'/'} className='menu-link'>INICIO</Link></li>
                    <li className='menu-item'>
                        <Link to={'/'} className='menu-link menu-desp'>PRODUCTOS</Link>
                        <ul className='submenu'>
                            <Link to={'category/macetas'} className="submenu-link"><li>MACETAS</li></Link>
                            <Link to={'category/cocina'} className="submenu-link"><li>COCINA</li></Link>
                            <Link to={'category/floreros'} className="submenu-link"><li>FLOREROS</li></Link>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to={'/'} className='menu-link'>CONTACTO</Link></li>
                </ul>
            </div>
            <div>
                <Link to={'/cart'}><CartWidget/></Link>

            </div>

        </div>
    )
}

export default NavBar