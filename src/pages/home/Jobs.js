import React from 'react'
import  styles from './home.module.css'
import JobTl from '../../components/posts/Job/jobtl'


export default function Jobs() {
    return (
        <div className={styles.container}>
              <JobTl/>  <JobTl/>  <JobTl/>  <JobTl/>  <JobTl/>
        </div>
    )
}
