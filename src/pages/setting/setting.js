
import styles from './setting.module.css'
import {AiOutlineLogout} from 'react-icons/ai'

import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout} from '../../Redux/authSlice'



const Setting=()=>{

   
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout()); // Dispatch the logout action
      
        return <Navigate to="/" />;
    
    
    };
    

    return(
    
    
        <div className={styles.container}>
        <div className={styles.item} onClick={handleLogout}>
          <AiOutlineLogout />
          <div>Logout</div>
        </div>
      </div>
    
    
    // <div  className={styles.container}>
    //     <div  className={styles.item}>
    //         <AiOutlineLogout/>
    //         <div>Logout</div>
    //     </div>



    // </div>
    
    
    )
}



export default Setting