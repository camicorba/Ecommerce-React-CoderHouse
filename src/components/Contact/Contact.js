import './contact.css'
const Contact=()=>{
    return (
        <div>
            <h2 className='title-cont'>CONTACTATE CON NOSOTROS</h2>
            <div className='contact'>
                <div className='contact-block'>
                    <form>
                    <h3>Escribinos un mensaje</h3>
                    <input className="input" type='text' name='Name' placeholder='Nombre'></input>
                    <br/>
                    <textarea className="text-area" type='text-area' name='messege' placeholder='Escribinos'></textarea>
                    <br/>
                    <button type='submit'>Enviar datos</button>
                    </form>
                </div>
                <div className='contact-block'>
                    <h3>Encontranos en Tandil</h3>
                    <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11224.267364049518!2d-59.13944242131841!3d-37.330012943181586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9eac644df6391640!2sTandil!5e0!3m2!1ses!2sar!4v1649949730112!5m2!1ses!2sar" width="500" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}
export default Contact