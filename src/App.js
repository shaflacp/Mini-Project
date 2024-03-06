import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRouter from './Router/UserRouter'
// import AdminRouter from './Router/AdminRouter'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path='/*' element ={<UserRouter/>}/>
     {/* <Route path='/admin/*' element ={<AdminRouter/>}/> */}


     </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App
