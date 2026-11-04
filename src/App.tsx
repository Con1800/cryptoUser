import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CryptoList from './pages/CryptoList'
import Tested from './pages/Tested'
import CryptoTransactions from './pages/CryptoTransactions'
import AddTransaction from './pages/AddTransaction'
import AddCryptoName from './pages/AddCryptoName'

function App() {


  return (
    <>
      <section id="center">
        <Router>
          <Routes>
            <Route path='/cryptos' element={<CryptoList />} />
            <Route path='/transaction' element={<Tested />} />
            <Route path='/cryptos/:cryptoName' element={<CryptoTransactions />} />
            <Route path='/add' element={<AddTransaction />} />
            <Route path='/addName' element={<AddCryptoName />} />
          </Routes>
        </Router>
        
      </section>
    </>
  )
}


export default App
