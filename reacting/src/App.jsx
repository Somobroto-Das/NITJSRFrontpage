// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
function App() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <Navbar/>
      <LandingPage/>
      <Footer/>
      </div>
  )
}

export default App;