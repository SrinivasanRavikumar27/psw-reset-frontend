import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import DashBoard from './components/DashBoard.jsx';
import PasswordResetForm from './components/PasswordResetForm.jsx';
import ChangePassword from './components/ChangePassword.jsx';
import Home from './components/Home.jsx';
import ViewProfile from './components/ViewProfile.jsx';
import Navbar from './components/Navbar.jsx';

function App() {

    return (
<Router>

<Navbar/>

<Routes>
<Route path='/home' element = {<Home/>}/>
  <Route path='/register' element = {<RegisterForm/>} />
  <Route path='/login' element = {<LoginForm/>}/>
  <Route path='/reset-password' element = {<PasswordResetForm/>} />
  <Route path='/updatePassword/:id/:token' element = {<ChangePassword/>}/>
  <Route path='/dashboard' element = {<DashBoard/>} />
  <Route path='/viewProfile' element = {<ViewProfile/>}/>
</Routes>
</Router>
  )
}

export default App;