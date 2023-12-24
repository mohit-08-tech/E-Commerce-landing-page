import React from 'react'
import Navbar from './assets/components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/pages/Home';
import Error from './assets/pages/Error';
const App = () => {
  return (
    <>
      <BrowserRouter>
      {/* Components goes here */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
