import React, { useState } from 'react'
import Img from "./contactImg.webp"
import {motion} from "framer-motion"
function Contact() {
  return (
    <motion.div 
    initial={{width:"0vw"}}
    animate={{width:"100vw"}}
    transition={{duration:1}}
    
     id="container_contact">
   
       
            <form style={{width:"70%",margin:"100px auto 20px auto ",boxShadow:"2px 2px 10px rgb(230, 230, 230)",borderRadius:15,padding:14}}>
            <h2 className='text-center'>contact us :</h2>
                <div className="filed">
                    <span style={{textAlign:"left"}}>your email :</span> <br />
                    <input required style={{width:"100%",padding:"5px",border:"none",borderBottom:"1.2px solid black",outline:"none"}} placeholder="exemple@gmail.com" type="email" />
                </div>
                
                <div className="filed">
                    <span className='text-left'>your message :</span> <br />
                    <textarea placeholder='your message...' required style={{width:"100%",height:"140px",resize:"none",padding:"12px"}}></textarea>
                </div>
                <button style={{border:"none",color:"white",background:"rgb(254, 140, 52)",padding:"5px"}} className=' w-100'>send now</button>
            </form>
       
     
    </motion.div>
  )
}

export default Contact
