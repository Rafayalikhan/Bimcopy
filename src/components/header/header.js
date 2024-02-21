import React, { useState } from 'react'
import styles from './Header.module.css'
import {AiOutlineSetting,AiOutlineBell,AiOutlineSearch,AiOutlineHome,AiOutlineRead,AiOutlinePlus } from 'react-icons/ai';
import {RiBookmarkLine,RiSuitcaseLine,RiAddCircleLine,RiArticleLine} from 'react-icons/ri'
// import {BiUserCircle} from 'react-icons/bi'
// import {BsHash,BsNewspaper} from 'react-icons/bs'
import {BiErrorCircle,BiLibrary} from 'react-icons/bi'
// import {MdOutlinePoll} from 'react-icons/md'
import { Link,useMatch,useLocation } from 'react-router-dom';
import Notification from './notification';
import { setToken } from '.././../Redux/authSlice'
import logo from '../logo/logo.png'


const Header = (props)=>{
 
    const location = useLocation();
    
    // Extracting pathname from the location object
    const [showNotofication,setShowNotification] = React.useState(false)
    
  
   
    
    const pathname = location.pathname;
  
    // Your existing code...
    let homeActive = pathname === "/home";
    let searchActive = pathname === "/search";
    let profileActive = pathname === "/profile";
    let issueActive = pathname === "/issue";
    let articleActive = pathname === "/articles";
    let jobActive = pathname === "/job";
    let learnActive = pathname === '/learn';
    let notiActive = pathname === '/notification';
    let libActive = pathname === '/lib';
    let SettingActive = pathname === '/setting';
  
//  let homeActive = useMatch({path:"/home"})
//  let searchActive = useMatch({path:"/search"})
//  let profileActive = useMatch({path:"/profile"})
//  let issueActive = useMatch({path:"/issue"})
//  let articleActive = useMatch({path:"/articles"})
//  let jobActive = useMatch({path:"/job"})
//  let  learnActive = useMatch({path:'learn'})
//  let  notiActive = useMatch({path:'notification'})
//  let libActive = useMatch({path:'lib'})
//  let SettingActive = useMatch({path:'setting'})







 const handleNotification = ()=>{
     setShowNotification(!showNotofication)
 }
 
    return(
        <div className={styles.container}>
            {showNotofication?
            <Notification/>:""}
            <div className={styles.main}>
            <div>    
                
            <div className={styles.logo} >
            <img src={logo}/>
            </div>
          
            <div  className={styles.navBar}>
            <div onClick={props.openaddpost} className={styles.createPost}>
                <RiAddCircleLine size={30} />
                <span>Post</span>
            </div>
            <Link  to="/home" style={homeActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}  className={styles.item}>
                <AiOutlineHome  size={30} />
                <span>Home</span>
            </Link>
            <Link style={jobActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}  to="/job"  className={styles.item}>
                <RiSuitcaseLine size={30} />
                <span>Jobs</span>
            </Link>
            <Link  style={issueActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}  to="/issue"  className={styles.item}>
                <BiErrorCircle size={30} />
                <span>Issue</span>
            </Link>
            <Link  style={articleActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}   to="/articles"  className={styles.item}>
                <RiArticleLine size={30} />
                <span>Article</span>
            </Link>
            <Link style={learnActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}  to="/learn"  className={styles.item}>
                <AiOutlineRead size={30} />
                <span>Learn</span>
            </Link  >
            <Link style={libActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}  to="/lib"  className={styles.item}>
                <BiLibrary size={30} />
                <span>Library</span>
            </Link> 
            <Link  to="/search" style={searchActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}  className={styles.item}>
                <AiOutlineSearch size={30} />
                <span>Search</span>
            </Link>
           
           
            </div>
            </div>


            <div className={styles.nav}>
                <div className={styles.icons}>
                <Link  to="/profile" >
                <img className={styles.pp} src="" 
                 style={profileActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}} />
                </Link>
                
                <AiOutlineBell onClick={handleNotification} style={showNotofication?{backgroundColor:"var(--primary)",color:"#fff"}:{}} className={styles.icon} size={25} />
                <RiBookmarkLine className={styles.icon} size={25} />
                <Link  to="/setting">
                <AiOutlineSetting 
                 style={SettingActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}
                className={styles.icon} size={25} />
                </Link>
                </div>
                <div className={styles.mobileNav}>
                {profileActive?
                <Link  to="/setting">
                <AiOutlineSetting 
                 style={SettingActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}
                className={styles.icon} size={25} />
                </Link>:""}
                </div>

            </div>
            </div>


            <div className={styles.tab}>
            <Link  to="/"  style={homeActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}  className={styles.tabIcon} ><AiOutlineHome size={24} height={24} width={24}/></Link>
            <Link  to="/search"  style={searchActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}  className={styles.tabIcon}><AiOutlineSearch size={24} /></Link>
            <div className={styles.tabIcon} onClick={props.openaddpost} ><AiOutlinePlus size={24} /></div>
            <Link  to="/notification"  style={notiActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}  className={styles.tabIcon}><AiOutlineBell size={24} /></Link>
            <Link  to="/profile"  style={profileActive?{backgroundColor:"var(--primary)",color:"#fff"}:{}}  className={styles.tabIcon} >                 <img className={styles.pp} src="https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg" />

</Link>

        </div>
       


        </div>
    )
}


export default Header