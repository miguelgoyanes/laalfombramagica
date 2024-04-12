import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imagenes from '../../../assets/imagenes';
import styles from './Integrante.module.css'


const IntegranteDerecha = ({ titulo, texto, imagen, icon, instagram }) => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <article className='container-fluid'>
      <div className='row bg-black'>
        <div className='col-lg-5 p-0 order-lg-2 d-flex justify-content-center'>
          <img src={imagen} alt="" className={`w-100 ${styles.imagenIntegrante}`} />
        </div>
        <div className='col col-lg d-flex flex-column justify-content-center align-items-center text-light p-sm-5 py-5 order-lg-1' data-aos="zoom-in">
          <div className='d-flex justify-content-center align-items-center mb-4'>
            <h2>{titulo}</h2>
            <img src={icon} alt="" className='ms-3' style={{ width: '50px' }} />
          </div>
          <p className={`text-justify ${styles.textoPresentIntegrante}`}>
            {texto}
          </p>
          <div className='d-flex w-100'>
            <a href={instagram} target='blanck' className='text-decoration-none text-light fs-4 ms-4 efect-hover-gir'><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default IntegranteDerecha
