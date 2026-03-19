import { useState } from 'react'
import './components/Header.css'
import './components/Card.css'
import './components/CardList.css'
import './components/Footer.css'
import './components/MainSection.css'
import './components/ProfileSection.css'
import ProfileSection from './components/ProfileSection'
import Header from './components/Header.jsx'
import MainSection from './components/MainSection.jsx'
import Card from './components/Card.jsx'
import CardList from './components/CardList.jsx'


function App() {
  return (
    <>
    <header> 
      <Header />
    </header>
    <main>
      <div className="profile">
      <ProfileSection />
      </div>

      <div className="card-list">
      <CardList />
      </div>
      
    </main> 
    

    </>
  )  
}

export default App
