import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Home from './pages/Home'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (

    <>
      <div className='grid-container'>
        <Header openSidebar={openSidebar} />
        <SideBar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
        <Home />
      </div>
    </>
  )
}

export default App
