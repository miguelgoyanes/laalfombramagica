import { Link } from 'react-router-dom'
import imagenes from '../assets/imagenes'
import styles from './Pagina404.module.css'

function Pagina404() {


    return (
        <section className='d-flex justify-content-center align-items-center bg-light' style={{ height: '100vh', width: '100%' }}>
            <div className='container d-block d-lg-flex justify-content-center align-items-center'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={imagenes.error404} alt="" className={`d-block d-lg-none ${styles.imagen404}`} />
                </div>
                <div className='p-3 m-3'>
                    <h2>Error 404</h2>
                    <p>Lo siento, la página que estás buscando no se pudo encontrar. Parece que te has perdido en la vastedad de la web. ¿Quizás quieras intentarlo de nuevo desde el principio? O si necesitas ayuda, contáctanos y estaremos encantados de asistirte en tu búsqueda.</p>
                    <Link to='/' className='btn btn-secondary'><i className="bi bi-house"></i></Link>
                </div>
                <img src={imagenes.error404} alt="" className={`d-none d-lg-block ${styles.imagen404}`} />
            </div>
        </section>
    )
}

export default Pagina404
