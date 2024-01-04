import React,{useState,useEffect} from 'react';
import  styles from './addpost.module.css'

const Learnpost = ()=>{
 
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
    console.log(selectedFile)
    return(
        <div className={styles.learnCon} >
            <input placeholder="Title" />
            {selectedFile?
            <div className={styles.vidCon}>
            <video  controls>
    <source src={URL.createObjectURL(selectedFile)}/>
</video>
<div className={styles.postBtn}>
            <button>Post</button>
            </div>
</div>
: 
<div className={styles.videoinput} ><label for="vid">
Upload Video
</label>
<input
onChange={onSelectFile}
style={{display:'none'}} id="vid" type="file" accept="video/*"  />

</div>
}
       


        </div>
    )
}


export default Learnpost