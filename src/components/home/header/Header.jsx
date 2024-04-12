import RedesSociales from './RedesSociales'
import imagenes from '../../../assets/imagenes.js'
import styles from './Header.module.css'


const Header = () => {

    return (
        <header>
            <div className={styles.imagenFondoHeader} >
                <div>
                    {/* <img src="../../../assets/img/logo.png" alt="" className={styles.imagenLogo} /> */}
                    <img src={imagenes.logo} alt="" className={styles.imagenLogo} />
                </div>
                <RedesSociales/>
            </div>
        </header>
        // <header>
        //     <div className={styles.imagenContainer}>
        //         <img src="../../../public/img/fondo-principal.jpg" alt="" className={styles.imagenFondo} />
        //         <div className={styles.overlay}></div>
        //         <div>
        //             <img src="../../../public/img/logo.png" alt="" className={styles.imagenLogo} />
        //         </div>
        //         <RedesSociales/>
        //     </div>
        // </header>
    )
}

export default Header
