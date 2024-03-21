import React, { useEffect, useState } from 'react';

function DashBoard() {

  const [user,setUser] = useState(null);

    useEffect( () => {

        const user =  JSON.parse(window.localStorage.getItem('user'));

        if(user){
setUser(user);
        }

    },[]);
 
  return (
    <div>
   {
    user ? <h3> Welcome back {user.username}!</h3> : <h3></h3>
   }
</div>
  )
}

export default DashBoard