import React from 'react'
import PostHeader from '../postHeader'
import styles from './media.module.css'
import {RiBookmarkLine,RiSuitcaseLine} from 'react-icons/ri'
import {AiOutlineLike} from 'react-icons/ai'
import {IoIosCheckmarkCircleOutline,IoMdRepeat,IoMdMore} from 'react-icons/io'
const MediaTl= ()=>{
    return(
        <div className={styles.container}>
            <PostHeader
            
            
            />
            <div className={styles.content}>
                <div>machine learningEasily setup personalization to automatically optimize individual user experiences, maximizing the objectives you care about through the power of machine learning </div>
            <img alt="civi" src="https://images.pexels.com/photos/4161619/pexels-photo-4161619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </div>
            <div style={{display:'flex'}}>
            <div className={styles.intraction}>
            <div className={styles.icons}>
                    <AiOutlineLike size="1rem" />
                </div>
               
                <div className={styles.icons}>
                    <IoMdRepeat  size="1rem" />
                </div>
                <div className={styles.icons}>
                    <RiBookmarkLine  size="1rem"/>
                </div>

                
            </div>
            <div className={styles.icons} ><IoMdMore  size="1rem" /></div>
           </div>
            
        </div>
    )
}

export default MediaTl