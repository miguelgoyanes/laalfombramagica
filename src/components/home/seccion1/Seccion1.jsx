import Cartel from "./Cartel";
import imagenes from '../../../assets/imagenes.js'
import styles from "./Seccion.module.css";
import { Link } from "react-router-dom";

const Seccion1 = () => {
    return (
        <section className={`d-flex flex-column align-items-center justify-content-center text-light fs-4 pt-5 ${styles.overlayFondo}`}>
            <article className="container my-5 ">
                {/* <div className={styles.backgroundBlur}> */}
                <p className="text-justify">
                    Somos unha banda de Indie Rock nacida en Lugo no ano 2022.
                </p>
                <p className="text-justify">
                    A nosa música, impregnada de tons reflexivos e sentimentais, explora
                    temas intrusivos que abordan os medos, o inexorable paso do tempo e a
                    complexidade do amor. Dende momentos enerxéticos e cargados de
                    overdrive ata delicadas interpretacións acústicas, "La Alfombra
                    Mágica" trae unha experiencia musical fresca e inédita.
                </p>
                {/* </div>--bs-gutter-x: 0; */}
            </article>
            <article className="d-flex justify-content-center w-100" style={{ bsgutter: 0 }}>
                <div className={`border-bottom border-5 border-almared2 ${styles.youtubeContainer}`} >
                    <a
                        href='https://www.youtube.com/watch?v=MLjdNpi7zSw'
                        target='blanck'
                        className='text-decoration-none text-light fs-2 ms-4'
                    >
                        <img src={imagenes.fotoYouTube} alt="" className={styles.youtubeFondo} />
                        <i className={`bi bi-youtube text-almared2 ${styles.youtubePlay}`}></i>
                    </a>
                </div>
            </article>
            <article className="container py-4 mb-5">
                <div className="d-flex flex-wrap gap-4 justify-content-center mt-5 py-4">
                    <Cartel
                        imagen={imagenes.cartel20042024}
                        diaSemana='SAB.'
                        fecha='20.04.2024'
                        hora='22.30'
                        texto='Concierto en Sala Jagger'
                        ubicacion='https://maps.app.goo.gl/gYDvrgzUNjf95ryM6'
                    />
                    <Cartel
                        imagen={imagenes.cartel03022024}
                        diaSemana='SAB.'
                        fecha='03.02.2024'
                        hora='22.30'
                        texto='Concierto en Sala Jagger'
                        ubicacion='https://maps.app.goo.gl/gYDvrgzUNjf95ryM6'
                    />
                </div>
            </article>
            <Link to='/qr'>
                pruebas
            </Link>
        </section>
    );
};

export default Seccion1;
