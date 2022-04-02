import { Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './home.css'
const Header=()=>{
    return(
        <div>
            <div className="header">
                <div className="header-img"></div>
                <div className='header-text'>
                    <h3 className='header-title'>Home products made with love. That's what you get from us. </h3>
                    <Link to='/category'>
                        <button className='header-btn'>EXPLORAR</button>
                    </Link>

                </div>
            </div>
            <ItemListContainer/>
        </div>
    )

}
export default Header