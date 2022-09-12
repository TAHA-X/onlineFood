import React, { useState } from 'react'
import { NavLink,BrowserRouter,Route,Routes } from 'react-router-dom';
import Menu from './Menu';
import "./Home.css";
import {motion} from "framer-motion";

function Home() {
  

  return (
    
    <motion.div 
  
     id="home_container"
     initial={{width:0}}
     animate={{width:"100%"}}
     transition={{duration:1}}
     exit={{x:"-100vw",transition:{duration:0.3}}}
     >
         <div>
           <span>enjoy by the best food restaurent</span> <br/> <br/>
          
              <a href='/menu' id="explore_menu">Explore our menu</a>
       
         </div>
    
    </motion.div>
  
  )
}

export default Home
