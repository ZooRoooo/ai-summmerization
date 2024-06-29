import React from 'react'
import Hero from './Components/Hero'
import './App.css'
import Demo from './Components/Demo'
const App = () => {
  return (
    <main>
    <div className="main">
      <div className="gradient"/>
    </div>
      <div className="app">
        <Hero/>
        <Demo/>
      </div>
    </main>
  )
}

export default App
App