import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logor from '../../images/logo-reducido.png'
const Footer = () =>{   
    return(
        <div>
            <div className="footer">
                <img className='footer-img' alt='cargando logo' src={ logor }/>
                <div className='footer-contc'>
                    <h3>CONTACTO</h3>
                    <li className='contacto-items'>
                        <FontAwesomeIcon className='footer-icon' icon={faMapPin} />
                        <span>Gral. Paz N°423, Tandil</span>
                    </li>
                    <li className='contacto-items'>
                        <FontAwesomeIcon className='footer-icon' icon={faPhone} />
                        <span>+54 9 221 609 4380</span>
                    </li>
                    <li className='contacto-items'>
                        <FontAwesomeIcon className='footer-icon' icon={faEnvelope} />
                        <span>camincorbalan@gmail.com</span>
                    </li>

                </div>
                <div className='footer-redes'>
                    <h3>REDES SOCIALES</h3>
                    <a href='https://www.facebook.com' target='blank'><FontAwesomeIcon href='www.facebook.com' className='footer-icon' icon={faFacebookF} /></a>
                    <a href='https://www.instagram.com' target='blank'><FontAwesomeIcon className='footer-icon' icon={faInstagram} /></a>
                </div>
            </div>
            <div className='copy'>
                <p>Hecho por Camila Corbalan • 2022 • Todos los derechos reservados</p>
            </div>
        </div>
        
    )

}
export default Footer