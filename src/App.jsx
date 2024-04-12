import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx"
import './App.css'



function App() {
  return (
    <>
      <main>
        <Outlet />
        {/* <div style={{height: '200px'}}></div> */}
      </main>
      <Footer/>
    </>
  )
}

export default App
