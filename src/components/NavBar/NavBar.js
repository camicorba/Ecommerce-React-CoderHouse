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
                    <li className='menu-item'><Link to={'/'} className='menu-link'>HOME</Link></li>
                    <li className='menu-item'>
                        <Link to={'/category'} className='menu-link menu-desp'>PRODUCTS</Link>
                        <ul className='submenu'>
                            <Link to={'category/tazas'} className="submenu-link"><li>CUPS</li></Link>
                            <Link to={'category/macetas'} className="submenu-link"><li>POTS</li></Link>
                            <Link to={'category/cocina'} className="submenu-link"><li>KITCHEN</li></Link>
                            <Link to={'category/floreros'} className="submenu-link"><li>VASE</li></Link>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to={'/'} className='menu-link'>CONTACT</Link></li>
                </ul>
            </div>
            <div>
                <CartWidget/>

            </div>

        </div>
    )
}

export default NavBar