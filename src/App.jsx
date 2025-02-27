import { useState } from 'react'
import './App.css'
import {Footer,Header,WhatGPT3,Possiblity,Features,Blog} from './containers'
import {CTA,Brand,Navbar,Article,Feature} from './components'

function App() {
  
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possiblity/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
