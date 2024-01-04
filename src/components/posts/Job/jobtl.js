import React from 'react'
import PostHeader from '../postHeader'
import styles from './job.module.css'
import {AiOutlineLike} from 'react-icons/ai'
import {RiBookmarkLine,RiSuitcaseLine} from 'react-icons/ri'
import {IoIosCheckmarkCircleOutline,IoMdRepeat,IoMdMore} from 'react-icons/io'
const JobTl= ()=>{
    return(
        <div className={styles.container}>
            <PostHeader
            
            icon={<RiSuitcaseLine size={"1rem"}/>}
           
            />
            <div className={styles.content}>
            BIM Technicain needed.
            </div>
            <div style={{display:'flex'}}>
            <div className={styles.intraction}>
            <div className={styles.icons}>
                    <AiOutlineLike size="1rem" />
                </div>
                <div className={styles.icons}>
                    <IoIosCheckmarkCircleOutline size="1rem" />
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

export default JobTl