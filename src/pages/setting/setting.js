import React, { useContext } from 'react'
import styles from './setting.module.css'
import {AiOutlineLogout} from 'react-icons/ai'
import { AuthContext } from '../../contexts/AuthContext'

const Setting=()=>{

    const {logout} = useContext(AuthContext)


    return(<div  className={styles.container}>
        <div onClick={logout} className={styles.item}>
            <AiOutlineLogout/>
            <div>Logout</div>
        </div>



    </div>)
}



export default Setting