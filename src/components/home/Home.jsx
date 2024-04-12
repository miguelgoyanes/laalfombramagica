import Header from './header/Header'
import Integrantes from './integrantesGrupo/Integrantes'
import Seccion1 from './seccion1/Seccion1'
import styles from './Home.module.css'


const Home = () => {

  return (
    <div className={styles.fondoFijo}>
      <Header/>
      <Seccion1/>      
      <Integrantes/>
    </div>
  )
}

export default Home
