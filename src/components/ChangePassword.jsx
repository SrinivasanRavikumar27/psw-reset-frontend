import React, { useState } from 'react';
import '../styles/changePassword.css';
import axios from 'axios';

function ChangePassword() {

    const [passwordData,setPasswordData] = useState({
        newPassword : "",
        confirmPassword : ""
    });

const handleChangePassword = async (event) =>{

    event.preventDefault();

    // Get the path from the URL
const path = window.location.pathname;

// Split the path by '/'
const pathParts = path.split('/');

// The id is the second part (index 1) and the token is the third part (index 2)
const id = pathParts[2];

const token =pathParts[3];

const config = {
    headers : {
      'Authorization' : `Bearer ${token}`
    }
  };

const payload = {
    newPassword : passwordData.newPassword,
    confirmPassword : passwordData.confirmPassword,
    userid : id
}

   try {

    const response = await axios.patch('http://localhost:3000/api/updatePassword',payload,config);

    const data = await response.data;

    if(response.status === 200){

        // remove from localStroage
window.localStorage.removeItem("user");
window.localStorage.removeItem("token");
        
        // to set data in localStroage
      window.localStorage.setItem('token',data.token);
      window.localStorage.setItem('user',JSON.stringify(data));

      alert(data.message);

        setPasswordData({
            newPassword : "",
            confirmPassword : ""
        });
    
        window.close();
    }else{
        alert(data.message);
        console.error(data.message,data);
    }
   } catch (error) {
    alert(error.response.data.message);
    console.error(error.response.data.message);
   }

    };

  return (
    <div>

        <form onSubmit={handleChangePassword} >

        <h1>Change password</h1>

<br/>

<div>
    <label htmlFor="new_password">New Password: </label>
    <input type="password" name="new_password" id="new_password" placeholder="Enter new password"
    value={passwordData.newPassword} required 
    onChange={(e) => setPasswordData({...passwordData,newPassword : e.target.value})} />
</div>
<br/>
<div>
    <label className="cp" htmlFor="confirm_password">Confirm New Password: </label>
    <input type="password" name="confirm_password" id="confirm_password" 
    placeholder="Enter the confirm password"  
    value={passwordData.confirmPassword} required 
    onChange={(e) => setPasswordData({...passwordData,confirmPassword : e.target.value})} />
</div>
<br/>
<div>
    <button  type="submit">Submit</button>
</div>
        </form>

    </div>
  )
}

export default ChangePassword;