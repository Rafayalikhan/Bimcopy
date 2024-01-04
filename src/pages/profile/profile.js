import React, { useState } from 'react';
import styles from './profile.module.css'
import {BiEdit} from 'react-icons/bi'
import EditProfile from './edit-profile';
import JobTl from '../../components/posts/Job/jobtl';
import IssueTl from '../../components/posts/issue/issueTl';


const Profile =()=>{
    const [modal,setmodal]=useState(false)
    
const handlemodal = () => setmodal(!modal);


    return(
        <div className={styles.container}>
          {modal?
          <EditProfile
          closemodal={()=>handlemodal()}
          />:""}
          <div className={styles.cover}>
              <img src="https://images.pexels.com/photos/7245333/pexels-photo-7245333.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          </div>
       
        <div className={styles.card}>
            <div className={styles.col}>
                <div style={{fontWeight:600}}>Zack Haren</div>
                <div>BIM Technician</div>
                <div>BIM rely</div>
                <div>New Delhi</div>
            </div>
            <div style={{marginLeft:"110px"}} className={styles.col}>
            <div onClick={()=>handlemodal()} > <BiEdit/> Edit Profile</div>
            <div >5 year + Experience </div>
            <div>M.Tech from CU</div>

            </div>
            </div>
            <div  className={styles.pp}>
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        </div>
        <div className={styles.right}>
                    
                    <div className={styles.rcol}>
                    <h3>Experiance</h3>
                    <div className={styles.rcolItem} >
                    <div>Memaat Associates</div>
                    <div style={{fontSize:'small',color:'#464646'}}>2018-2020</div>
                    </div>
                    <div className={styles.rcolItem} >
                    <div>AEC Digital Solution</div>
                    <div style={{fontSize:'small',color:'#464646'}}>2017-2018</div>
                    </div> 
                    <div className={styles.rcolItem} >
                    <div>Archohm Consultansts</div>
                    <div style={{fontSize:'small',color:'#464646'}}>2015-2017</div>
                    </div>
                    </div>
                    <div className={styles.rcol} >
                    <h3>Education</h3>
                    <div className={styles.rcolItem} >
                    <div>Chandigarh university - M.tech</div>
                    <div style={{fontSize:'small',color:'#464646'}}>2016-2018</div>
                    </div> 
                    <div className={styles.rcolItem} >
                    <div>Jamia Millia Islamia - B.tech</div>
                    <div style={{fontSize:'small',color:'#464646'}}>2013-2016</div>
                    </div> 
                    <div className={styles.rcolItem} >
                    <div>Abul kalam university - Diploma</div>
                    <div style={{fontSize:'small',color:'#464646'}}>2010-2013</div>
                    </div> 
                    </div>
                </div>
                <JobTl/>
                <IssueTl/>
              



        </div>
    )
}

export default Profile