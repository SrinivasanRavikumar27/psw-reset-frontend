import React, { useState } from 'react';
import '../styles/loginForm.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

const [loginData,setLoginData] = useState({
  email : "",
  password : ""
});

const navigate = useNavigate();

    // login function
  const handleLogin = async (event) => {

    event.preventDefault();

    try {
      const user = {
        email : loginData.email,
        password : loginData.password
      };
  
      const response = await fetch('https://psw-reset-backend.onrender.com/api/login',{
        method : "POST",
        headers  : {"Content-Type" : "application/json"},
        body : JSON.stringify(user)
      });
  
      const data = await response.json();
  
      if(response.status === 200){
        alert('user logined sucessfully');
        console.log('logined sucessfully',data);
        // to clear data
        setLoginData({
          email : "",
          password : ""
        });
        
        // to set data in localStroage
        window.localStorage.setItem('token',data.token);
        window.localStorage.setItem('user',JSON.stringify(data));
  
        navigate('/dashboard');

        window.location.reload();
  
      }else{
        alert(data.message);
        console.log('error in user login',data);
      }
  
    } catch (error) {
      alert(error.response.data.message);
      console.error(error.response.data.message,error);
    }
    
  };

  // reset form 
  const handleResetForm = () => {
    navigate('/reset-password')
  }

  return (
    <div>

        <form onSubmit={handleLogin} >

<h1>Login Form</h1>

<div>
<label className='email' htmlFor='email' >email : </label>
<input id='email' name='email' type='text' value={loginData.email} placeholder='email ..'
onChange={(e) => setLoginData({...loginData,email : e.target.value})} />
</div>

<div>
  <label htmlFor='password' >password : </label>
  <input id='password' name='password' type='password' value={loginData.password} placeholder='password.. '
  onChange={(e) => setLoginData({...loginData,password : e.target.value})} />
</div>

<div>
  <button className='registerbtn' type='submit' >Login</button>
</div>

<p>Forgot Password (or) Reset Password ?  <button className='resetbtn' onClick={handleResetForm} >Click Here</button></p>

<p>Not Registered ? <button className='loginbtn' onClick={(e) => navigate('/register')} >Register</button></p>

</form>

</div>

  )
}

export default LoginForm;