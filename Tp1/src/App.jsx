import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/Header.css'
import './components/Card.css'
import './components/CardList.css'
import './components/Footer.css'
import './components/MainSection.css'
import './components/ProfileSection.css'
import ProfileSection from './components/ProfileSection'
import Header from './components/Header.jsx'


function App() {
  return (
    <>
    <header>
      <Header />
    </header>
      
    <div>
      <ProfileSection />
    </div>
    </>
  )  
}

export default App
