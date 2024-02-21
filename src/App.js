// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Search from './pages/search/search';
import AddPost from './components/addpost/addpost';
import Profile from './pages/profile/profile';
import Jobs from './pages/home/Jobs';
import Issue from './pages/home/issue';
import Article from './pages/home/article';
import Learn from './pages/home/learn';
import 'react-quill/dist/quill.snow.css'; 
import MobileNotification from './pages/mobileNotification/MobileNotification';
import Lib from './pages/lib/lib';
import Setting from './pages/setting/setting';
import Account from './login-singup/acount';
import Login from './login-singup/login';
import SignUp from './login-singup/signup'
import { setToken,loginUser ,addUser} from './Redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';




function App() {
  const [showAddpost, setShowAddpost] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.user);
  const handlePostToggle = () => setShowAddpost(!showAddpost);
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      dispatch(setToken());
    }

    // Check the login status here and update isLogged accordingly
    // For example, you can check if the user is logged in using your authentication logic
    // For now, I'm assuming a simple condition, update it based on your logic

    dispatch(addUser()); // Assuming addUser is an action to set the user from localStorage
    // You can perform additional checks here based on your authentication logic

    // Example: Check if the user is already authenticated, and if not, attempt to log in
  }, [dispatch]);
  
  
  
  
  
  function PrivateRoute({ element }) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    useEffect(() => {
      // Check user authentication status and update accordingly
      if (!user.isAuthenticated) {
        dispatch(loginUser(/* your login credentials or logic here */));
      }
      dispatch(addUser());
    }, [dispatch, user.isAuthenticated]);
  
    return user.isAuthenticated ? element : <Navigate to="/login" />;
  }
//   useEffect(() => {
    
//     if (!user.isAuthenticated) {
//       // Replace this with your actual login logic
//       dispatch(loginUser({ email, password }));
    
//     }
//     // Check the login status here and update isLogged accordingly
//     // For example, you can check if the user is logged in using your authentication logic
//     // For now, I'm assuming a simple condition, update it based on your logic

//     dispatch(addUser()); // Assuming setToken is an action to set the token from localStorage
//     // You can perform additional checks here based on your authentication logic

//     // Example: Check if the user is already authenticated, and if not, attempt to log in
    
//   // Change the States After Callback //

 
    
  
// }, [dispatch,email, password, user.isAuthenticated]);

  return (
    <BrowserRouter>
      <div className="App">
        {user.isAuthenticated && (
          <>
            {showAddpost ? <AddPost close={handlePostToggle} /> : ''}
            <Header openaddpost={handlePostToggle} />
          </>
        )}
        <Routes>
        <Route element={<SignUp />} path="/" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Login setEmail={setEmail} setPassword={setPassword} />} path="/login" />
        {/* <Route
            path="/search"
            element={
              user.isAuthenticated ? <Search /> : <Navigate to="/search" />
            }
          /> */}
            <Route
            path="/search"
            element={<PrivateRoute element={<Search />} />}
          />
           <Route
            path="/articles"
            element={<PrivateRoute element={<Article />} />}
          />
          <Route
            path="/issue"
            element={<PrivateRoute element={<Issue />} />}
          />
          <Route
            path="/home"
            element={<PrivateRoute element={<Home />} />}
          />
           <Route
            path="/learn"
            element={<PrivateRoute element={<Learn />} />}
          />
           <Route
            path="/lib"
            element={<PrivateRoute element={<Lib />} />}
          />

            <Route
            path="/setting"
            element={<PrivateRoute element={<Setting />} />}
          />
          <Route
            path="/notification"
            element={<PrivateRoute element={<MobileNotification />} />}
          />
           <Route
            path="/job"
            element={<PrivateRoute element={<Jobs />} />}
          />
           <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} />}
          />
            {/* <Route
            path="/article"
            element={
              user.isAuthenticated ? <Article /> : <Navigate to="/article" />
            }
          /> */}
            {/* <Route
            path="/issue"
            element={
              user.isAuthenticated ? <Issue /> : <Navigate to="/issue" />
            }
          /> */}
            {/* <Route
            path="/profile"
            element={
              user.isAuthenticated ? <Profile /> : <Navigate to="/profile" />
            }
          />  
          <Route
          path="/home"
          element={
            user.isAuthenticated ? <Home /> : <Navigate to="/home" />
          }
        />
           <Route
          path="/learn"
          element={
            user.isAuthenticated ? <Learn /> : <Navigate to="/learn" />
          }
          
        />

          <Route
          path="/lib"
          element={
            user.isAuthenticated ? <Lib /> : <Navigate to="/lib" />
          }
          
        />
        
        <Route
          path="/setting"
          element={
            user.isAuthenticated ? <Setting /> : <Navigate to="/setting" />
          }
          
        />

          
           <Route
          path="/notification"
          element={
            user.isAuthenticated ? <MobileNotification /> : <Navigate to="/notification" />
          }
          
        /> */}
         {/* <Route element={<SignUp />} path="/signup" />
          <Route element={<SignUp />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/login" />
          <Route element={<Search />} path="/search" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Jobs />} path="/job" />
          <Route element={<Issue />} path="/issue" />
          <Route element={<Article />} path="/articles" />
          <Route element={<Learn />} path="/learn" />
          <Route element={<Lib />} path="/lib" />
          <Route element={<Setting />} path="/setting" />
          <Route element={<MobileNotification />} path="/notification" /> */}
        
          {/* <Route element={<Account />} path="/" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;





// import './App.css';
// import Header from './components/header/header';
// import Home from './pages/home/home';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Router
// } from "react-router-dom";
// import Search from './pages/search/search';
// import AddPost from './components/addpost/addpost';
// import { useState } from 'react';
// import 'react-quill/dist/quill.snow.css'; 
// import Profile from './pages/profile/profile';
// import Jobs from './pages/home/Jobs';
// import Issue from './pages/home/issue';
// import Article from './pages/home/article';
// import Learn from './pages/home/learn';
// import MobileNotification from './pages/mobileNotification/MobileNotification';
// import Lib from './pages/lib/lib';
// import Login from './login-singup/login';
// import Setting from './pages/setting/setting';
// import SignUp from './login-singup/signup';
// import Account from './login-singup/acount';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { setToken ,loginUser} from './Redux/authSlice';
// import CryptoJS from 'crypto-js';

// function App() {
//   const [showAddpost, setShowAddpost] = useState(false);
//   // const user = useSelector((state) => state.auth.user);
//   const handlePostToggle = () => setShowAddpost(!showAddpost);


// return (
    
//   <BrowserRouter>
//     <div className="App">
//          {setToken ? (
//         <>
//           {showAddpost ? <AddPost close={handlePostToggle} /> : ''}
//           <Header openaddpost={handlePostToggle} />
//         </>
//       ) : ''}  

     
        
//         <Routes>
//           <Route element={<Home />} path="/home" />
//           <Route element={<Account />} path="/" />
//           <Route element={<Search />} path="/search" />
//           <Route element={<Profile />} path="/profile" />
//           <Route element={<Jobs />} path="/job" />
//           <Route element={<Issue />} path="/issue" />
//           <Route element={<Article />} path="/articles" />
//           <Route element={<Learn />} path="/learn" />
//           <Route element={<Lib />} path="/lib" />
//           <Route element={<Setting />} path="/setting" />
//           <Route element={<MobileNotification />} path="/notification" />
//         </Routes>
   
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;














// import './App.css';
// import Header from './components/header/header';
// import Home from './pages/home/home';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Navigate
// } from "react-router-dom";
// import Search from './pages/search/search';
// import AddPost from './components/addpost/addpost';
// import { useContext, useState } from 'react';
// import 'react-quill/dist/quill.snow.css'; 
// import Profile from './pages/profile/profile';
// import Jobs from './pages/home/Jobs';
// import Issue from './pages/home/issue';
// import Article from './pages/home/article';
// import Learn from './pages/home/learn';
// import MobileNotification from './pages/mobileNotification/MobileNotification';
// import Lib from './pages/lib/lib';
// import AuthContextProvider, { AuthContext } from './contexts/AuthContext';
// import Login from './login-singup/login';
// import Setting from './pages/setting/setting';
// import SignUp from './login-singup/signup';
// import Account from './login-singup/acount';

// function App() {




//   return (
//     <div className="App">
//      <BrowserRouter>
//      <AuthContextProvider>
       
//     <Main/>
   
//     </AuthContextProvider>
//      </BrowserRouter>
//     </div>
//   );
// }



// const Main =()=>{

//   const [showAddpost,setShowAddpost]=useState(false)

//   const handlepostToggle = () => setShowAddpost(!showAddpost)
//   const {authuser} = useContext(AuthContext)

//   return(
//     <div>
//       {authuser?
//       <>
//       {showAddpost?
//       <AddPost close={handlepostToggle} />:""}
//      <Header openaddpost={handlepostToggle} />
//      </>:""}
//     <Routes>
//       <Route element={<Home/>}  path="/" />
//       <Route element={<Account/>}  path="/login" />
//       <Route element={<Search/>}  path="/search" />
//       <Route element={<Profile/>}  path="/profile" />
//       <Route element={<Jobs/>}  path="/job" />
//       <Route element={<Issue/>}  path="/issue" />
//       <Route element={<Article/>}  path="/articles" />
//       <Route element={<Learn/>}  path="/learn" />
//       <Route element={<Lib/>}  path="/lib" />
//       <Route element={<Setting/>}  path="/setting" />


//       <Route element={<MobileNotification/>}  path="/notification" />
     
      
//     </Routes>
//     </div>
//   )
// }




// export default App;
