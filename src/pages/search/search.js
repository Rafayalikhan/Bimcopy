import react, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './search.module.css'


const Search=()=>{

    const [filter,setFilter]=useState('job')


    return(
        <div className={styles.container}>
            <div className={styles.search}>
                <input placeholder='search' />
                <AiOutlineSearch size={30}/>
            </div>
            <div className={styles.filters} >
                <div style={{backgroundColor:'var(--primary)',color:'#fff'}} >Jobs</div>
                <div>Issue</div>
                <div>Article</div>
                <div>Learn</div>
                <div>Library</div>
                
                
            </div>

                   </div>
    )
}


export default Search