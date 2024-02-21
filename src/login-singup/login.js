// Login.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { HiMail } from 'react-icons/hi';
import { FaKey } from 'react-icons/fa';
import { useDispatch ,useSelector } from 'react-redux';
import { loginUser, setToken, logout ,setUser} from '../Redux/authSlice';
import CryptoJS from 'crypto-js';
import bcrypt from 'bcryptjs'
import { Link } from 'react-router-dom';


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.isAuthenticated) {
      navigate('/profile'); // Change this to the desired route
    }
  }, [user.isAuthenticated, navigate]);
  
  const handleLogin = async () => {
    try {
      setLoading(true);
       
      // Basic email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Invalid email address');
        return;
      }

      // Basic password validation
      if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      if (!passwordRegex.test(password)) {
        setError('Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one digit.');
        return;
      }

    //   const { user: loginUser, token } = await dispatch(loginUser({ email, password }));

    //   // Check if the login was successful
    //   if (loginUser) {
    //     // Update user information in Redux state
    //     dispatch(setUser(loginUser));

    //     // Store the token in local storage
    //     localStorage.setItem('token', token);

    //     // Dispatch an action to update user information in Redux state (use an existing action or setUser)
    //     // Example with an existing action: dispatch(updateUserInfoAction(userInformation));

    //     // Navigate to the desired page
    //     navigate('/profile');
    //   }
    // } catch (error) {
    //   console.error('Login failed:', error);
    //   setError('Login failed. Please try again.');
    // } finally {
    //   setLoading(false);
    // }
      const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    
      const token = await dispatch(loginUser({ email, password:hashedPassword}));
       
 
     
      // Check if the login was successful
      if (token.error) {
           

        setError(token.error.message);
     
        // localStorage.setItem('token', token); // Store the token in local storage
        // dispatch(setToken(token));
        // navigate('/profile');
      }
      else {
        localStorage.setItem('token', token); // Store the token in local storage
        dispatch(setToken({...token}));
  
        // Update the Redux state with the user information (example)
        // dispatch(setUser({ email, token }));
    
      
        // Navigate to the desired page
        navigate('/profile');
      }


    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
    
      
  };

  return (
    // ... (rest of the component remains the same)
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
               <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
               
       </div>
       <div onClick={props.handlefp} className={styles.forget}>
           Forget Password ?
       </div>
     
       {error?
       <div style={{marginTop:"10px",color:"red"}}>Invalid Email or password please try again.</div>
       :""}

       {loading?
         <div style={{width:"30px",height:"30px"}} className="loader"></div>:
         <button className={styles.btn} onClick={handleLogin} >Log in</button>
       }
          {/* <div style={{marginTop:"10px",cursor:'pointer',color:"var(--primary)",fontWeight:'bold'}} onClick={props.gotoSign} >Sign up</div> */}
          <div style={{ marginTop: '10px', cursor: 'pointer', color: 'var(--primary)', fontWeight: 'bold' }}>
  <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }} onClick={props.gotoSign}>
    Sign up
  </Link>
</div>
      
     
       </div>
            </div>
          
        </div>

  );
};

export default Login;






// import React, { useContext, useState } from 'react';
// import styles from './login.module.css'
// import {HiMail} from 'react-icons/hi'
// import {FaKey} from 'react-icons/fa'
// import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
// import { AuthContext } from '../contexts/AuthContext';
// // import Loader from '../components/loader/loader';
 
// const Login =(props)=>{
//  const {authUser,setAuthuser}=useContext(AuthContext);

//     const auth = getAuth();

// const [email,setEmail]=useState('')
// const [pass,setPass]=useState('')
// const [loading,setLoading]=useState(false)
// const [nav,setNav]=useState('login')
// const [err,setErr]=useState(false)

// const handleLogin =()=>{
//     setErr(false)
//     setLoading(true)
//    signInWithEmailAndPassword(auth,email,pass).then((res)=>{
//        setAuthuser(res.user);
//        setLoading(false)
//    }).catch((err=>{
//        console.log(err)
//        setLoading(false)
//        setErr(true)
//    }))
// }



//     return(
//         <div className={styles.container}>
//             <div className={styles.main}>
//                 <div  className={styles.header}>
//                 <h1>Login</h1>
//                 <div>Stay updated on your professional world</div>
//                 </div>
//                 <div className={styles.form}>
               
//                     <div className={styles.inputGroup}>
//                         <div className={styles.icon}>
//                     <HiMail size={24} />
//                     </div>
//                     <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"  />
                   
                                  
            
//             </div>

              
//             </div>
//             <div className={styles.form}>
               
//                <div className={styles.inputGroup}>
//                    <div className={styles.icon}>
//                <FaKey size={22} />
//                </div>
//                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password"/>
               
//        </div>
//        <div onClick={props.handlefp} className={styles.forget}>
//            Forget Password ?
//        </div>
     
//        {err?
//        <div style={{marginTop:"10px",color:"red"}}>Invalid Email or password please try again.</div>
//        :""}

//        {loading?
//          <div style={{width:"30px",height:"30px"}} className="loader"></div>:
//          <button className={styles.btn} onClick={handleLogin} >Log in</button>
//        }
//           <div style={{marginTop:"10px",cursor:'pointer',color:"var(--primary)",fontWeight:'bold'}} onClick={props.gotoSign} >Sign up</div>

      
     
//        </div>
//             </div>
          
//         </div>
//     )
// }


// export default Login