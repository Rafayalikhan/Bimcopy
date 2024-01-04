import React from 'react'
import  styles from './home.module.css'
import IssueTl from '../../components/posts/issue/issueTl'
import BlogTL from '../../components/posts/blog/blog'


export default function Article() {
    return (
        <div className={styles.container}>
             <BlogTL/><BlogTL/><BlogTL/><BlogTL/><BlogTL/>
        </div>
    )
}
