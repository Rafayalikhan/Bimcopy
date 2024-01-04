import React, { useContext, useState } from 'react';
import styles from './login.module.css'
import {HiMail} from 'react-icons/hi'
import {FaKey} from 'react-icons/fa'

// import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
// import { AuthContext } from '../contexts/AuthContext';
// import Loader from '../components/loader/loader';
// import { useSelector, useDispatch } from 'react-redux';
// import { setUser, setToken, setError, setLoading } from '../Redux/authSlice';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../Redux/authSlice';
 
const SignUp =(props)=>{


const [email,setEmail]=useState('')
// const [firstName,setfirstName]=useState('')
const [password,setpassword]=useState('')
const [loading,setLoading]=useState(false)
const [err,setErr]=useState(false)

const dispatch = useDispatch()

const handlesignup =async()=>{
try {
    setLoading(true);

    // Your sign-up logic here, for example, making an API call
    // Replace the following with your actual sign-up logic
    await dispatch(signUpUser({email,password}))

    // If successful, you might want to redirect or show a success message
  } catch (error) {
    // Handle errors, show error messages, etc.
  } finally {
    setLoading(false);
  }
  


}
// dispatch(signUpUser({email,password}))
    // const user = useSelector((state) => state.auth.user);
    // const token = useSelector((state) => state.auth.token);
    // const loading = useSelector((state) => state.auth.loading);
    // const error = useSelector((state) => state.auth.error);
    // const dispatch = useDispatch();




//  const {authUser,setAuthuser}=useContext(AuthContext);

//     const auth = getAuth();

// const [email,setEmail]=useState('')
// const [pass,setPass]=useState('')
// const [cpass,setCpass]=useState('')
// const [loading,setLoading]=useState(false)
// const [err,setErr]=useState(false)

//     const handlesignup =()=>{
//         setErr(false)
//         setLoading(true)
//         if(pass===cpass){
//        createUserWithEmailAndPassword(auth,email,pass).then((res)=>{
//            setAuthuser(res.user);
//            setLoading(false)
//        }).catch((err=>{
//            console.log(err)
//            setLoading(false)
//        }))}else{
//            setErr(true)
//        }
//     }




    return(

      //   <div className="signup-container">
      //   <h1>Sign Up</h1>
      //   <div className="form-group">
      //     <label>Email:</label>
      //     <input type="text" placeholder="Enter your email" />
      //   </div>
      //   <div className="form-group">
      //     <label>Password:</label>
      //     <input type="password" placeholder="Enter your password" />
      //   </div>
      //   <div className="form-group">
      //     <label>Confirm Password:</label>
      //     <input type="password" placeholder="Confirm your password" />
      //   </div>
      //   <button onClick={handleSignUp}>Sign Up</button>
      //   {loading && <div className="loading-indicator">Loading...</div>}
      //   {error && <div className="error-message">Error: {error}</div>}
      //   {user && <div className="user-info">User: {user}</div>}
      //   {token && <div className="token-info">Token: {token}</div>}
      // </div>
    
    
          <div className={styles.container}>
            <div className={styles.main}>
                <div  className={styles.header}>
                <h1>Sing up</h1>
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
               <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password"/>
               </div>
      {/* //  </div>
      //       <div className={styles.form}>
               
      //          <div className={styles.inputGroup}>
      //              <div className={styles.icon}>
      //          <FaKey size={22} />
      //          </div>
      //          <input value={cpass} onChange={(e)=>setCpass(e.target.value)} type="password" placeholder="Confirm Password"/>
      //  </div>
     */}
       
       {err?
       <div style={{marginTop:"10px",color:"red"}}>Password din't match</div>
       :""}

       {loading?
         <div style={{width:"30px",height:"30px"}} className="loader"></div>:
         <button className={styles.btn} onClick={handlesignup} >Create Account</button>
       }
     
     <div style={{marginTop:"10px",cursor:'pointer',color:"var(--primary)"}} onClick={props.gotologin} >Goto Login</div>
    
    <div className='btn-linkedin'>
     <a href="#" title="LinkedIn" class="btn btn-linkedin btn-lg"><i class="fa fa-linkedin fa-fw"></i> LinkedIn</a>
     </div>
       </div>
            </div>
          
        </div>
    )
}


export default SignUp