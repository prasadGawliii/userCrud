import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/CRUD/Home'
import {BrowserRouter, Routes, Route} from 'react-router'
import Edit from './components/CRUD/Edit'
import Create from './components/CRUD/Create'

function App() {


  return (
    <>

<BrowserRouter>
      <Routes>

      <Route path='/'element={<Home/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path='/create' element={<Create/>}/>
     
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


//json-server --watch db.json --port 5000
