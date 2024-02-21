import React, { useState,useEffect} from 'react'
import ReactQuill from 'react-quill'; // ES6
import {AiOutlineCamera} from 'react-icons/ai'
import styles from './addpost.module.css'
import { useDispatch,useSelector } from 'react-redux';
import {addArticle} from '../../Redux/articleSlice'
import { setToken } from '../../Redux/authSlice';
const Article =()=>{
   
    const dispatch = useDispatch();
    const [text,setText]=useState("")
    const [file, setFile] = useState()
    const [preview, setPreview] = useState()
    // const [loading, setLoading] = useState(false);
  
    const loading = useSelector((state) => state.articles.loading);
    const isSuccess = useSelector((state) => state.articles.isSuccess);
useEffect(() => {
    if (!file) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [file])

const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setFile(null)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setFile(e.target.files[0])
}



const handlePost = () => {
  
  // Gather data from the component
   
  if (!text || !file) {
    alert('Please enter text and select a file before posting.');
    return;
  }
  
  const articleData = {
      text,
      file
    //   file: {
    //     originalname: file.name,
    //     location: file.location,
    //     // Add other necessary fields
    // },
      // Add other necessary fields
    };

  

    console.log(articleData); 

    // Dispatch the addArticle action
    dispatch(addArticle(articleData,));

    setText("");
    setFile("");

  };

  useEffect(() => {
    // Check if the post was successful and show alert
    if (isSuccess) {
      alert('Post added successfully!');
      // You can also reset the form or perform other actions after successful post
    }
    console.log('isSuccess changed:', isSuccess);
  }, [isSuccess]);



    return(
       
        <div>
      {file ? (
        <div className={styles.imgPrev}>
          <img src={preview} alt="Preview" />
        </div>
      ) : (
        ''
      )}

      <ReactQuill
        value={text}
        onChange={(value) => setText(value)}
        style={{ height: '300px', margin: '10px', marginBottom: '50px' }}
      />

      {file ? (
        ''
      ) : (
        <div className={styles.addicon}>
          <label htmlFor="img">Upload image</label>
          <input
            onChange={onSelectFile}
            style={{ display: 'none' }}
            id="img"
            type="file"
            accept="image/*"
            
          />
        </div>
      )}

      <div className={styles.postBtn}>
      {loading ? (
          <div style={{ width: '30px', height: '30px' }} className="loader"></div>
        ) : (
          <button onClick={handlePost}>Post</button>
        )}
      </div>
    </div>
       
       
       
        // <div>
        //     {selectedFile?
        //     <div className={styles.imgPrev}  >
        //     <img src={preview} /> </div>:""}
                

        //             <ReactQuill
        //             value={content}
        //             onChange={(value)=>setContent(value)}
        //             style={{height:"300px",margin:"10px",marginBottom:"50px"}}
        //             />
        //         {selectedFile?
        //     "":
        //         <div className={styles.addicon}>
        //         <label for="img">
        //         Upload image
        //         </label>
        //         <input
        //         onChange={onSelectFile}
        //         style={{display:'none'}} id="img" type="file" accept="image/*"  />
        //     </div>}
        //     <div className={styles.postBtn}>
        //     <button>Post</button>
        //     </div>
        // </div>
    )
}


export default Article