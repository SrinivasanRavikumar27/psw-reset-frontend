import React, { useState } from 'react';
import '../styles/passwordResetForm.css';
import  axios from "axios";
import { useNavigate } from 'react-router-dom';

function PasswordResetForm() {

    const [email,setEmail] = useState({
        email : ""
    });

    const navigate = useNavigate();

    const handleLink = async (event) => {

        event.preventDefault();

      try {
        const response =  await axios.post('https://psw-reset-backend.onrender.com/api/reset-password',email);

        const data = await response.data;
 
         if(response.status === 200){
 
  alert(data.message);
 
  setEmail({
     email : ""
  });
 
  navigate('/login');
 
         }else{
             alert(data.message);
             console.log(data.message,data);
         }
      } catch (error) {
        alert(error.response.data.message);
      console.error(error.response.data.message,error);
      }

    };

  return (
    <div>
        <form onSubmit={handleLink}>

<h1>Password Reset Form</h1>

            <div>
                <label htmlFor="email">Email : </label>
                <input type="text" id="email" name='email' placeholder='emailId .... ' value={email.email}
                    onChange={(e)=> setEmail({...email,email : e.target.value})} required
                />
            </div>
            
            <div>
                <button className='registerbtn' type="submit">Send Reset Link</button>
            </div>
           
        </form>

        
        
    </div>
  )
}

export default PasswordResetForm;