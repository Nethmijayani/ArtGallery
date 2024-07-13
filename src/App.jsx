
import './App.css'
import About from './Components/About'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'

import { Routes, Route, Link } from 'react-router-dom'
import Gallery from './Pages/Gallery'

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <Features/>
    <About/>
    <Pricing/>
    <Footer/>

    {/*
    <Route exact path ="/gallery" component ={<Gallery/>} />
*/}
   </>
  )
}

export default App
