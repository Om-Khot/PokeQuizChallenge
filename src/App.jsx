import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Buttons/Buttons'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import StartPage from './Pages/StartPage'
import WhoAmIPlay from './Pages/PlayPages/WhoAmIPlay'
import ResultPage from './Pages/Result/ResultPage'

function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/start' element={<StartPage/>} />
        <Route path='/start/play' element={<WhoAmIPlay/>} />
        <Route path='/start/play/result/:scr' element={<ResultPage/>} />
      </Routes>
    </div>
  );
    
}

export default App


// <Button text={"Play"} styleType={"primary"}/>