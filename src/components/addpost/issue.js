import React, { useState,useEffect} from 'react'
import ReactQuill from 'react-quill'; // ES6
import {AiOutlineCamera} from 'react-icons/ai'
import styles from './addpost.module.css'
const IssueaddPost =()=>{

    const [content,setContent]=useState("")
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
}


    return(
        <div>
            {selectedFile?
            <div className={styles.imgPrev}  >
            <img src={preview} /> </div>:""}
                

            <ReactQuill
                    value={content}
                    onChange={(value)=>setContent(value)}
                    style={{height:"300px",margin:"10px",width:'90%',marginBottom:"50px"}}
                    />
                {selectedFile?
            "":
                <div className={styles.addicon}>
                <label for="img">
                Upload image
                </label>
                <input
                onChange={onSelectFile}
                style={{display:'none'}} id="img" type="file" accept="image/*"  />
            </div>}
            <div className={styles.postBtn}>
            <button>Post</button>
            </div>
        </div>
    )
}


export default IssueaddPost