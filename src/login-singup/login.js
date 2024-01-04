import React, { useContext, useState } from 'react';
import styles from './login.module.css'
import {HiMail} from 'react-icons/hi'
import {FaKey} from 'react-icons/fa'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { AuthContext } from '../contexts/AuthContext';
import Loader from '../components/loader/loader';
 
const Login =(props)=>{
 const {authUser,setAuthuser}=useContext(AuthContext);

    const auth = getAuth();

const [email,setEmail]=useState('')
const [pass,setPass]=useState('')
const [loading,setLoading]=useState(false)
const [nav,setNav]=useState('login')
const [err,setErr]=useState(false)

const handleLogin =()=>{
    setErr(false)
    setLoading(true)
   signInWithEmailAndPassword(auth,email,pass).then((res)=>{
       setAuthuser(res.user);
       setLoading(false)
   }).catch((err=>{
       console.log(err)
       setLoading(false)
       setErr(true)
   }))
}



    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <div  className={styles.header}>
                <h1>Login</h1>
                <div>Stay updated on your professional world</div>
                </div>
                <div className={styles.form}>
               
                    <div className={styles.inputGroup}>
                        <div className={styles.icon}>
                    <HiMail size={24} />
                    </div>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"  />
                   
                                  
            
            </div>

              
            </div>
            <div className={styles.form}>
               
               <div className={styles.inputGroup}>
                   <div className={styles.icon}>
               <FaKey size={22} />
               </div>
               <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password"/>
               
       </div>
       <div onClick={props.handlefp} className={styles.forget}>
           Forget Password ?
       </div>
     
       {err?
       <div style={{marginTop:"10px",color:"red"}}>Invalid Email or password please try again.</div>
       :""}

       {loading?
         <div style={{width:"30px",height:"30px"}} className="loader"></div>:
         <button className={styles.btn} onClick={handleLogin} >Log in</button>
       }
          <div style={{marginTop:"10px",cursor:'pointer',color:"var(--primary)",fontWeight:'bold'}} onClick={props.gotoSign} >Sign up</div>

      
     
       </div>
            </div>
          
        </div>
    )
}


export default Login