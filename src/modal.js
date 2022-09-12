import React from 'react';
import {motion,AnimatePresence} from "framer-motion";
import { NavLink } from 'react-router-dom';
var backdrop = {
  initial : {opacity:0},
  animate : {opacity:1},
 
}
var box = {
  initial : {y:-1000,opacity:0},
  animate: {y:0,opacity:1,transition:{delay:0.5}},
  exit : {y:-1000,transition:{duration:0.5,delay:2}}
}
var Modal = ({ShowModal,SetShowModal})=>{
      return(
        <AnimatePresence exitBeforeEnter>
          {
            ShowModal && (
                <motion.div className='backdrop'
                  variants={backdrop}
                   initial="initial"
                   animate="animate"
                >
                  <motion.div
                   className='box'
                   variants={box}
                   initial="initial"
                   animate="animate"

                   >
                   <h2>go the the about page</h2>
                   <NavLink onClick={()=>SetShowModal(false)} to="/about">go now</NavLink>
                   </motion.div>
                </motion.div>
            )
          }
      </AnimatePresence>
      )
}
export default Modal
