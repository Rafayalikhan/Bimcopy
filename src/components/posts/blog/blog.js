import React, { useState } from 'react';
import styles from './blog.module.css'
import {RiBookmarkLine} from 'react-icons/ri'
import PostHeader from '../postHeader';
import {AiOutlineRead,AiOutlineLike} from 'react-icons/ai'
import {BsChatDots} from 'react-icons/bs'
import {IoMdRepeat,IoMdMore} from 'react-icons/io'

const BlogTL=()=>{
    const [blog,setBlog]=useState(`<h2 style="text-align:start;">Detailed Guide on how to Create Skirting Boards, Cornices, Architraves and Covings in Revit.</h2>
    <p style="text-align:start;">The first thing to do before beginning the development of your Revit Skirtign Boards, Cornices etc. is to create or load in your selected profile family into the live Revit project ahead of creating your in place family sweep. In our example, we loaded an existing skirting board profile from the Revit Families folder that was preinstalled with the program. To locate your Revit Skirting, Coving or Cornice Profile (in our exampe, skirting profile) go through the following folder tree (Note: This filepath is belonged to the UK Metric Family database – your folder structure may vary rom this if you are using US Imperial, South African Metric, Hong Kong libraries etc)</p>
    <p style="text-align:start;">Navigate to the Insert Tab. From there, select “Load Family” → Profiles → Secondary Fix Carpentry → Skirtings (or Mouldings / Architraves) and then choose your desired profile. As you can see from the gallery images below, we have used the “Torus” profile as the base for our Revit Skirting Family.</p>
    `)
    return(
        <div className={styles.container}>
            <PostHeader
            icon={<AiOutlineRead size={"1rem"}/>}
            />
                  <div className={styles.content} dangerouslySetInnerHTML={{ __html: blog }} />
            
                  <div style={{display:'flex'}}>
            <div className={styles.intraction}>
                
                <div className={styles.icons}>
                    <AiOutlineLike size="1rem" />
                </div>
                <div className={styles.icons}>
                    <BsChatDots size="1rem" />
                </div>
                <div className={styles.icons}>
                    <IoMdRepeat  size="1rem" />
                </div>
                <div className={styles.icons}>
                    <RiBookmarkLine  size="1rem"/>
                </div>

                
            </div>
            <div className={styles.icons} ><IoMdMore  size="1rem" /></div>
           </div>
            
        </div>
    )
}

export default BlogTL