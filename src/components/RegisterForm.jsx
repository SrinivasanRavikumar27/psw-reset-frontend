import React, { useState } from 'react';
import '../styles/registerForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterForm() {

  const [registerData,setRegisterData] = useState({
    username : "",
    email : "",
    password : ""
  });

  const navigate = useNavigate();

 // user register function
 const handleRegister = async (event) => {

    event.preventDefault();
    
    try {
      const user = {
        username : registerData.username,
        email :  registerData.email,
        password: registerData.password
      }
      
      const response = await axios.post('http://localhost:3000/api/register',user);
      
      const data = await response.data;
      
      if(response.status === 200){
  
        alert(data.message);
  
        console.log(data);
  
        setRegisterData({
      username : "",
      email : "",
      password :""
        });
  
        // to go directly to logipage
        navigate('/login');
  
      }else{
        alert(data.message);
        console.error("Error in registration ",data);
      }
    } catch (error) {
      alert(error.response.data.message);
      console.error(error.response.data.message,error);
    }
    
      };

  return (
    <div>

<form onSubmit={handleRegister} >

      <h1>Register Form</h1>
  
  <div>
  <label className='username' htmlFor='username'>username : </label>
    <input type='text' id='username' value={registerData.username} 
    name='username' placeholder='username..'
      onChange={(e) => setRegisterData({...registerData,username : e.target.value})}
    />
  </div>
  
  <div>
  <label className='email' htmlFor='email'>email : </label>
    <input  type='text' id='email' value={registerData.email} name='email'  placeholder='email@example.com' 
      onChange={(e)=> setRegisterData({...registerData ,email : e.target.value })}
    />
    </div>
  
    <div>
    <label htmlFor='password'>password : </label>
    <input type='password' id='password' value={registerData.password} name='password'  placeholder='password..' 
      onChange={(e)=>setRegisterData({...registerData, password : e.target.value }) }
    />
  </div>
  
  <div>
    <button className='registerbtn' type='submit' >Register</button>
  </div>

  <p>Already Registered ? <button className='loginbtn' onClick={(e) => navigate('/login')} >Login</button></p>
    
  </form>

   

    </div>
  )
}

export default RegisterForm