import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Register, AirVrf , CPrincipal} from './pages'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={ <CPrincipal />}/>
        <Route path='/vrf' element={<AirVrf/>}/>
      </Routes>
    </BrowserRouter>
        
        
      
    </>
  )
}

export default App
