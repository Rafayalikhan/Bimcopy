import React from 'react'
import BlogTL from '../../components/posts/blog/blog'
import IssueTl from '../../components/posts/issue/issueTl'
import JobTl from '../../components/posts/Job/jobtl'
import LibTl from '../../components/posts/lib/lib'
import MediaTl from '../../components/posts/media/mediaTl'
import styles from './home.module.css'

const Home =()=>{
    return(
        <div className={styles.container}>
            
                <JobTl/>
                <IssueTl/>
                <LibTl/>
                <BlogTL/>
                <MediaTl/>
        </div>
    )
}


export default Home