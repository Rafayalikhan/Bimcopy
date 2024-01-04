import React from 'react'
import styles from './post.module.css'
import {RiSuitcaseLine} from 'react-icons/ri'
const PostHeader =(props)=>{
    return(
        <div>
            <div className={styles.header}>
                <img alt="profile picture"  src="https://randomuser.me/api/portraits/men/28.jpg" />
                <div className={styles.userinfo}>
                    <div style={{fontSize:'1rem',fontWeight:600}}>Jhon deos</div>
                    <div style={{color:'#3A3A3A',fontSize:'small'}} >2h ago</div>
                </div>
                <div className={styles.postIcon}>
                    {props.icon}
                </div>
                
            </div>
        </div>
    )
}


export default PostHeader