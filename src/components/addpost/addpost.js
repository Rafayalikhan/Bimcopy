import React,{ useEffect, useRef, useState} from 'react'
import styles from './addpost.module.css'
import {AiOutlineRead,AiOutlineClose} from 'react-icons/ai'
import {BiErrorCircle} from 'react-icons/bi'
import {RiSuitcaseLine,RiArticleLine} from 'react-icons/ri'
import Article from './article'
import Learnpost from './learn'
import IssueaddPost from './issue'
import JobPost from './job-post'

const AddPost =(props)=>{
    const [clickedOutside, setClickedOutside] = useState(false);
    const [postType,setPostType]=useState("article")


    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
           props.close()
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });
  

    return(
        <div className={styles.container}>
        <modal  ref={myRef}  className={styles.modal}>
            
            <div className={styles.close}><AiOutlineClose
            onClick={props.close}
            size={30} /></div>
            <div className={styles.tab}>
            <div onClick={()=>setPostType("article")} style={postType==="article"?{color:"var(--primary)"}:{}}  >
            <RiArticleLine size={30} />
            <div style={{marginLeft:"5px"}}>Article</div>
            </div>
            <div onClick={()=>setPostType("learn")}  style={postType==="learn"?{color:"var(--primary)"}:{}} >
            <AiOutlineRead size={30} />
            <div style={{marginLeft:"5px"}} >Learn</div>
            </div>
         
            <div onClick={()=>setPostType("issue")}  style={postType==="issue"?{color:"var(--primary)"}:{}} >
            <BiErrorCircle size={30} />
            <div style={{marginLeft:"5px"}} >Issue</div>
            </div>
            <div onClick={()=>setPostType("job")} style={postType==="job"?{color:"var(--primary)"}:{}}  >
            <RiSuitcaseLine size={30} />
            <div  style={{marginLeft:"5px"}} >Job</div>
            </div>

            </div>
            
           {postType==="article"?<Article/>:""}
           {postType==="learn"?<Learnpost/>:""}
           {postType==="issue"?<IssueaddPost/>:""}
           {postType==="job"?<JobPost/>:""}

        </modal>
        </div>
    )
}



export default AddPost