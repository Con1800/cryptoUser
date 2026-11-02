import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CryptoList from './pages/CryptoList'
import Tested from './pages/Tested'

function App() {


  return (
    <>
      <section id="center">
        <Router>
          <Routes>
            <Route path='/cryptos' element={<CryptoList />} />
            <Route path='/transaction' element={<Tested />} />
          </Routes>
        </Router>
        
      </section>
    </>
  )
}


export default App
