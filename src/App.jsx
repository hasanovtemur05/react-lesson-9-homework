
import About from "./components/pages/about-page"
import Home from "./components/pages/home-page"
import Single from "./components/pages/single-page"
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='single/:id' element={<Single/>}></Route>

    </Routes>
  </div>
  )
}

export default App
