import React, { useContext, useState } from 'react';
import styles from './login.module.css'
import {HiMail} from 'react-icons/hi'
import {FaKey} from 'react-icons/fa'
import {getAuth,sendPasswordResetEmail} from 'firebase/auth'
import { AuthContext } from '../contexts/AuthContext';
import Loader from '../components/loader/loader';
 
const Forgetpass =(props)=>{
 const {authUser,setAuthuser}=useContext(AuthContext);

    const auth = getAuth();

const [email,setEmail]=useState('')
const [loading,setLoading]=useState(false)
const [send,setSend]=useState(false)

const handleLogin =()=>{
    setLoading(true)
   sendPasswordResetEmail(auth,email).then((res)=>{
      setSend(true)
       setLoading(false)
   }).catch((err=>{
       console.log(err)
       setLoading(false)
   }))
}



    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <div  className={styles.header}>
                <h1>Foget Password</h1>
                <div>Stay updated on your professional world</div>
                </div>
                <div className={styles.form}>
                {send?<div style={{color:"green",marginBottom:'10px'}}>We have send you a password reset link please check inbox of {email}</div>
:""}
               
                    <div className={styles.inputGroup}>
                        <div className={styles.icon}>
                    <HiMail size={24} />
                    </div>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"  />
                   
                                  
            
            </div>
            
       {loading?
         <div style={{width:"30px",height:"30px"}} className="loader"></div>:
         <button className={styles.btn} onClick={handleLogin} >Send password reset link</button>
       }
          <div style={{marginTop:"10px",cursor:'pointer',color:"var(--primary)",fontWeight:'bold'}} onClick={props.gotologin} >Back to Login</div>

     
       </div>
            </div>
          
        </div>
    )
}


export default Forgetpass