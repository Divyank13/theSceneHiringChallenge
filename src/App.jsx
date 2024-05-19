import { Route, Routes } from 'react-router-dom'

import './index.css'
import { HomePage } from './pages/home/homePage'
import { NavBar } from './components/navBar/navBar'
import { DogDetails } from './pages/dogDetails/dogDetails'

import { GiHamburgerMenu } from "react-icons/gi";
import { StateHandlerContext } from './context/screenContext'
import { useContext } from 'react'

function App() {  
  const {setIsSideBarOpen} = useContext(StateHandlerContext)

  return (
    <div className="main">
      <div className="hidden fixed left-2 top-2 md:block"><GiHamburgerMenu onClick={() => setIsSideBarOpen(true)} /></div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details' element={<DogDetails />} />
      </Routes>
    </div>
  )
}

export default App
