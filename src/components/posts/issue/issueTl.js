import React from 'react'
import PostHeader from '../postHeader'
import styles from './issue.module.css'
import {RiBookmarkLine} from 'react-icons/ri'
import {BsChatDots} from 'react-icons/bs'
import {BiErrorCircle} from 'react-icons/bi'
import {AiOutlineLike} from 'react-icons/ai'
import {IoMdRepeat,IoMdMore} from 'react-icons/io'
const IssueTl= ()=>{
    return(
        <div className={styles.container}>
            <PostHeader
            icon={<BiErrorCircle size={"1rem"}/>}
            />
            <div className={styles.content}>
            Which is the best option for modelling skirting to rooms and can dynamo be used to make the process quicker.            </div>
            <div style={{display:'flex'}}>
            <div className={styles.intraction}>
            <div className={styles.icons}>
                    <AiOutlineLike size="1rem" />
                </div>
                <div className={styles.icons}>
                    <BsChatDots size="1rem" />
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

export default IssueTl