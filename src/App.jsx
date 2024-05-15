import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import { Register, AirVrf } from './pages'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<AirVrf />}/>
        <Route path='/vrf' element={<AirVrf/>}/>
      </Routes>
    </BrowserRouter>
        
        
      
    </>
  )
}

export default App
