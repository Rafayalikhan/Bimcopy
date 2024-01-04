import React from 'react'
import  styles from './home.module.css'
import IssueTl from '../../components/posts/issue/issueTl'


export default function Issue() {
    return (
        <div className={styles.container}>
              <IssueTl/>  <IssueTl/>  <IssueTl/>  <IssueTl/>  <IssueTl/>
        </div>
    )
}
