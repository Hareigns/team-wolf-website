import './App.css'
import Home from '/src/pages/home'
import Card from '/src/components/Card'
import Services from '/src/pages/Services/services'


function App() {

  return (
    <div className='main-main'>

      <div className="mb-3">
        <Home />
      </div>

      <div className="mb-3">
        <Services />
      </div>



    </div>

  )
}

export default App
