import './App.css'
import Vrf from './components/CardVrf/Vrf'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    
        <Header />
        <div className='container_principal'>
        <Vrf />
        <Vrf/>
        <Vrf/>
        <Vrf />
        <Vrf />
      </div>
      <footer className="">
        Este desarrollo es netamente practico para pruebas
      </footer>
    </>
  )
}

export default App
