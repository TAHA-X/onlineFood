
import {NavLink,Route,Routes,BrowserRouter,useLocation} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import "./navbar.css";
import {motion,AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import Modal from "../modal"
var anim = {
  initial:{y:-1000},
  animate:{
    y:0,
    transition:{duration:3,type:"spring",stiffness:150}
  }
}
var animHover = {
   hover : {
      scale:1.1,
      transition : {yoyo:Infinity}
   }
}

var Nav =({ShowModal,SetShowModal})=> {
  
  var location = useLocation();
  var [click,SetClick] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      SetShowModal(true)
  },3000)
  },[SetShowModal])
  return (
    <AnimatePresence onExitComplete={()=>SetShowModal(false)}>
         <motion.nav 
             variants={anim}
             initial="initial"
             animate="animate"
          >
             <NavLink id="logo" to="/">Online Food</NavLink>
             <FaBars style={{cursor:"pointer",fontSize:24}} onClick={()=>SetClick(!click)} className="close"/>
             <div style={{top:click ? "65px":"-1000px"}} id="Navlinks">
                <motion.label 
                    variants={animHover}
                    whileHover="hover"
                  ><NavLink onClick={()=>SetClick(!click)} to="/">Home</NavLink>
                </motion.label>
                <motion.label 
                    whileHover={{scale:1.1}}
                    transition={{type:"spring",stiffness:150}}
                    
                  ><NavLink onClick={()=>SetClick(!click)} to="/menu">Menu</NavLink>
                </motion.label>
                 <motion.label 
                    whileHover={{scale:1.1}}
                    transition={{type:"spring",stiffness:150}}
                    
                  ><NavLink onClick={()=>SetClick(!click)} to="/about">About</NavLink>
                </motion.label>
                 <motion.label 
                    whileHover={{scale:1.1}}
                    transition={{type:"spring",stiffness:150}}
                    >
                    <NavLink onClick={()=>SetClick(!click)} to="/contact">Contact</NavLink>
                </motion.label>
             </div>
         </motion.nav>
         <Routes 
           location={location} key={location.key}
         >
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About />}/>
         </Routes>

    </AnimatePresence>
  )
}

export default Nav
