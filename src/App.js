import './App.css';
import Header from './components/header/header';
import Home from './pages/home/home';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Search from './pages/search/search';
import AddPost from './components/addpost/addpost';
import { useContext, useState } from 'react';
import 'react-quill/dist/quill.snow.css'; 
import Profile from './pages/profile/profile';
import Jobs from './pages/home/Jobs';
import Issue from './pages/home/issue';
import Article from './pages/home/article';
import Learn from './pages/home/learn';
import MobileNotification from './pages/mobileNotification/MobileNotification';
import Lib from './pages/lib/lib';
import AuthContextProvider, { AuthContext } from './contexts/AuthContext';
import Login from './login-singup/login';
import Setting from './pages/setting/setting';
import SignUp from './login-singup/signup';
import Account from './login-singup/acount';

function App() {




  return (
    <div className="App">
     <BrowserRouter>
     <AuthContextProvider>
       
    <Main/>
   
    </AuthContextProvider>
     </BrowserRouter>
    </div>
  );
}



const Main =()=>{

  const [showAddpost,setShowAddpost]=useState(false)

  const handlepostToggle = () => setShowAddpost(!showAddpost)
  const {authuser} = useContext(AuthContext)

  return(
    <div>
      {authuser?
      <>
      {showAddpost?
      <AddPost close={handlepostToggle} />:""}
     <Header openaddpost={handlepostToggle} />
     </>:""}
    <Routes>
      <Route element={<Home/>}  path="/" />
      <Route element={<Account/>}  path="/login" />
      <Route element={<Search/>}  path="/search" />
      <Route element={<Profile/>}  path="/profile" />
      <Route element={<Jobs/>}  path="/job" />
      <Route element={<Issue/>}  path="/issue" />
      <Route element={<Article/>}  path="/articles" />
      <Route element={<Learn/>}  path="/learn" />
      <Route element={<Lib/>}  path="/lib" />
      <Route element={<Setting/>}  path="/setting" />


      <Route element={<MobileNotification/>}  path="/notification" />
     
      
    </Routes>
    </div>
  )
}




export default App;
