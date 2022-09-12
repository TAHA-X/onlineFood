import React, { useState } from 'react'
import "./About.css"
import {motion,AnimatePresence} from "framer-motion"
function About() {
  var [cach,SetCach] = useState(false);
  return (
    <motion.div 
    initial={{width:0}}
     animate={{width:"100%"}}
     transition={{duration:1}}
     exit={{x:"100vw",transition:{duration:0.3}}}
     className='container pt-3 text-center' id="container_about">
       <h1 className='text-center'><span>O</span>ur <span>S</span>tory</h1>
       <div className='text-justify pt-3'>
       Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since 
       of the 1500s, when an unknown printer took a galley of type and scra make 
       a type specimen book. It has survived not.ly five centuries, but
        also the leap into electronic typesetting, remaining essentially unchanged the
       </div>
       
       <button onClick={()=>{SetCach(true); console.log(cach)}} id="btn_learn_more">learn more</button>
       <AnimatePresence>
       {cach && <motion.div
                          style={{background:"black",zIndex:100,color:"white",padding:15,textAlign:"justify",position:"absolute",left:"50%",x:"-50%",width:"90vw",margin:"10px auto"}}
                          initial={{y:-700,opacity:0}}
                          animate={{y:-280,opacity:1}}
                          transition={{duration:0.7}}
                          exit={{y:-1000,opacity:0}}
                      >
                          <h2 onClick={()=>SetCach(false)} style={{color:"white",textAlign:"right",cursor:"pointer"}}>&times;</h2>
                          <h1 style={{textAlign:"center"}}>About Us</h1>
                          <p>
                          Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since 
              of the 1500s, when an unknown printer took a galley of type and scra make 
              a type specimen book. It has survived not.ly five centuries, but
                also the leap into electronic typesetting, remaining essentially unchanged the
                Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since 
              of the 1500s, when an unknown printer took a galley of type and scra make 
              a type specimen book. It has survived not.ly five centuries, but
                also the leap into electronic typesetting, remaining essentially unchanged the
                Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since 
              of the 1500s, when an unknown printer took a galley of type and scra make 
              a type specimen book. It has survived not.ly five centuries, but
                also the leap into electronic typesetting, remaining essentially unchanged the
                Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since 
              of the 1500s, when an unknown printer took a galley of type and scra make 
              a type specimen book. It has survived not.ly five centuries, but
                also the leap into electronic typesetting, remaining essentially unchanged the
                          </p>
                        </motion.div>
              }
       </AnimatePresence>
    </motion.div >
  )
}

export default About
