import './App.css'
import CryptoList from './pages/CryptoList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {


  return (
    <>
      <section id="center">
        <Router>
          <Routes>
            <Route path='/cryptos' element={<CryptoList />} />
          </Routes>
        </Router>
        
      </section>
    </>
  )
}


export default App
