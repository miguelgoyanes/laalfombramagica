import { Link } from 'react-router-dom'
import imagenes from '../assets/imagenes'

function Footer() {


    return (
        <footer className='bg-black'>
            <div className="container-fluid text-light text-center">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <Link to="/">
                            <img src={imagenes.logo} alt="Logo" style={{ height: '300px' }} />
                        </Link>
                    </div>
                    <div className="col-12 col-lg-5 mb-5 mb-lg-0">
                        <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center h-100 fs-5'>
                            <a href="mailto:alma.laalfombramagica@gmail.com" className='d-block text-decoration-none text-light text-start my-2' target='blanck' style={{wordBreak: 'break-all'}}>
                                <i className="bi bi-envelope"></i>
                                <span className='ms-2'>alma.laalfombramagica@gmail.com</span>
                            </a>
                            <a href="tel:+34691359496" className='d-block text-decoration-none text-light my-2' target='blanck'>
                                <i className="bi bi-telephone"></i>
                                <span className='ms-2'>691359496</span>
                            </a>
                            <a href="https://www.instagram.com/laalfombramagica_?igsh=MWRzMzkxOHppaXc2dQ==" className='d-block text-decoration-none text-light my-2' target='blanck'>
                                <i className="bi bi-instagram"></i>
                                <span className='ms-2'>@laalfombramagica_</span>
                            </a>
                            <a href="https://www.tiktok.com/@laalfombramagica_?_t=8lLnUmNmiET&_r=1" className='d-block text-decoration-none text-light my-2' target='blanck'>
                                <i className="bi bi-tiktok"></i>
                                <span className='ms-2'>@laalfombramagica_</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
