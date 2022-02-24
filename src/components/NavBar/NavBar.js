import logoh1 from '../../images/logoh1.png'
import CartWidget from './CartWidget'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='menu'>
            <div>
                <img className='menu-logo' alt="logo" src={ logoh1 } />
            </div>
            <div>
                <ul>
                    <li className='menu-item'>
                        <a className='menu-link' href='##'>INICIO</a>
                        <a className='menu-link' href='##'>PRODUCTOS</a>
                        <a className='menu-link' href='##'>QUIENES SOMOS</a>
                        <a className='menu-link' href='##'>CONTACTO</a>
                    </li>
                </ul>
            </div>
            <div>
                <CartWidget/>
            </div>

        </div>
    )
}

export default NavBar