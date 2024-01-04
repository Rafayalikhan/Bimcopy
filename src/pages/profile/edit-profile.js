import React from 'react'
import styles from './profile.module.css'
import {IoIosRemoveCircleOutline} from 'react-icons/io'
import {MdOutlineCancel} from 'react-icons/md'

const EditProfile = (props)=>{
    return(
        <div className={styles.editcontainer}>
        <modal className={styles.modal} >
           <div className={styles.editprofileheader} >
               <div>
                   Edit Profile
               </div>
               <MdOutlineCancel style={{cursor:'pointer'}} onClick={props.closemodal}  size={30} />
               

           </div>
            <div className={styles.inputGroup} >
                <div>First Name</div>
                <input/>
            </div>
            <div className={styles.inputGroup} >
                <div>Last Name</div>
                <input/>
            </div>
            <div className={styles.inputGroup} >
                <div>Designation</div>
                <input/>
            </div>
            <div className={styles.inputGroup} >
                <div>Company</div>
                <input/>
            </div>
            <div className={styles.inputGroup} >
                <div>Location</div>
                <input/>
            </div>
            <div className={styles.inputGroup} >
                <div>Experiance</div>
                <div className={styles.list}>
                    <div>fiVeD 2 year</div>
                    <IoIosRemoveCircleOutline size={20}/>
                 </div>
                 <div className={styles.list}>
                    <div>fiVeD 2 year</div>
                    <IoIosRemoveCircleOutline size={20}/>
                 </div>
                 <div className={styles.listInput}>
                <input className={styles.li1} placeholder="Title"/>
                <input className={styles.li2}  placeholder="Start Year" />
                <input className={styles.li2}  placeholder="End Year" />
                <button>Add</button>
                </div>
                </div>
                <div className={styles.inputGroup} >
                <div>Education</div>
                <div className={styles.list}>
                    <div></div>
                    <IoIosRemoveCircleOutline size={20}/>
                 </div>
                 <div className={styles.list}>
                    <div>fiVeD 2 year</div>
                    <IoIosRemoveCircleOutline size={20}/>
                 </div>
                 <div className={styles.listInput}>
                <input className={styles.li1} placeholder="Institute"/>
                <input className={styles.li2} placeholder="Start Year" />
                <input className={styles.li2} placeholder="End Year" />
                <button>Add</button>
                </div>
                </div>
                <div className={styles.save}>
               <button >Save</button> 
            </div>
        </modal></div>
    )
}


export default EditProfile