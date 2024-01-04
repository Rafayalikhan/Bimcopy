import React, { useState } from 'react';
import Forgetpass from './forgetPass';
import Login from './login';
import SignUp from './signup';



const Account =()=>{
 
     const [nav,setNav]=useState('sign');
 
    const handleloginNav = ()=>{
        setNav('login')
    }

    const handlesignup = ()=>{
        setNav('sign')
    }
    const hanldeFp = ()=>{
        setNav('fp')
    }


    return(
        <div>
            {nav==="sign"?
          <SignUp gotologin={handleloginNav}/>:""}
          {nav==="login"?
          <Login handlefp={hanldeFp}   gotoSign={handlesignup}/>:""}
           {nav==="fp"?
         <Forgetpass gotologin={handleloginNav} />:""}

        </div>
    )
}


export default Account