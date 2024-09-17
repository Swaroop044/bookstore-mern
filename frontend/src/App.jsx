import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBooks'
import EditBook from './pages/EditBooks'
import DeleteBook from './pages/DeleteBooks'
const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/create' element = {<CreateBook/>}/>
    <Route path='/books/show/:id' element={<ShowBook/>}/>
    <Route path='/books/edit/:id' element={<EditBook/>}/>
    <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App
