import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ImageGenerationForm from './components/Generator'
import Home from './components/Home'
import Login from './components/Login'
import back from './background.jpg'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='colors'>
    <BrowserRouter>
    <Navbar/>
    <main className="sm:p-8 px-4 py-8 w-full bg-gradient-to-r from-[#04619F] via to-[#030327e9] min-h-[calc(100vh-73px)]">
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/generate" element={<ImageGenerationForm/>}/>
      </Routes>
      </div>
      </main>
    </BrowserRouter>
    </div>
  )
}

export default App