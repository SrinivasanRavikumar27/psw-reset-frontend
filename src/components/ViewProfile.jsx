import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ViewProfile() {

    const [user,setUser] = useState(null);
    
    const navigate = useNavigate();

    useEffect( () => {

        const user =  JSON.parse(window.localStorage.getItem('user'));

        if(user){
setUser(user);
        }

    },[]);

    // logout function
  const handleLogout = () =>{
    
setUser(null);

// remove from localStroage
window.localStorage.removeItem("user");
window.localStorage.removeItem("token");

// loginpage
navigate('/login');

window.location.reload();

  };

  return (
    <div>
     {
      user ? <h1>Welcome ,{user.username}! <button onClick={handleLogout} >Logout</button></h1>
      : <h1></h1>
     }
    </div>
  )
}

export default ViewProfile