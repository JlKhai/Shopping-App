import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import Detail from './components/Detail'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
