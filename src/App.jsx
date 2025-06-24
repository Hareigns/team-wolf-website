import './App.css'
import Home from '/src/pages/home'
import Navbar from '/src/components/Header'
import Services from '/src/pages/Services/services'
import About from '/src/pages/about'
import Footer from '/src/components/Footer'


function App() {

  return (
    <div className='main-main'>

      <Navbar />

      <Home />

      <Services />

      <About />

      <Footer />

    </div>

  )
}

export default App
