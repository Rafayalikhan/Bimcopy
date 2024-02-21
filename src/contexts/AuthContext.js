// import React, { createContext, useState, useEffect } from 'react';
// import {getAuth, onAuthStateChanged, signOut,signInWithEmailAndPassword}  from 'firebase/auth'
// import {useNavigate} from "react-router-dom";

// export const AuthContext = createContext();



// const AuthContextProvider = (props)=>{
//     const [authuser,setAuthuser]=useState();
//     const [loading,setLoading]=useState(true);
//     let navigate = useNavigate();

// const auth = getAuth();
// console.log(authuser)

// const logout=()=>{
//     signOut(auth).then(() => {
       
//       }).catch((error) => {
       
//       });
      
// }


// useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//         setLoading(true)
//         if (user) {
//          setAuthuser(user)
//          setLoading(false)
    
//             navigate("/",{ replace: true })
  
        
//         } else {
       
//          setAuthuser(null)
//          setLoading(false)
//          navigate("/login",{ replace: true })
//         }
//       });
// },[])

// useEffect(()=>{
  
  
  

// },[authuser])



// if(loading){
//     return(<h1>Loadig ..</h1>)
// }else
//    {
//     return(  
//    <AuthContext.Provider value={{authuser,setAuthuser,logout}} >
//     {props.children}
//     </AuthContext.Provider>
//     )
// }


   
// }


// export default AuthContextProvider
