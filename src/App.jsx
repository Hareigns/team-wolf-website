import './App.css'
import Home from '/src/pages/home'
import Navbar from '/src/components/Header'
import Footer from '/src/components/Footer'
import Services from '/src/pages/Services/services'


function App() {

  return (
    <div className='main-main'>

      <Navbar />

      <Home />

      <Services />



      <Footer />

    </div>

  )
}

export default App
