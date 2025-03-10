
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
    <Footer/>  
    </BrowserRouter>
  )
}

export default App
