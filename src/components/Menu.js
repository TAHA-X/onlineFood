import React from 'react';
import "./Menu.css";
import 'bootstrap/dist/css/bootstrap.css';
import img1 from "./image.jpg";
import img2 from "./image2.jpg";
import {motion} from "framer-motion";
var anim = {
   initial:{opacity:0,width:"0vw"},
   animate:{
     opacity:1,
     width:"100vw",
     transition:{
        duration:1.4,
       
  
     },
     
   },
   exit:{x:"-200vw",transition:{duration:0.3}}
 }
 
//  <motion.h2 variants={animChild}>test1</motion.h2>
//                 <motion.div variants={animChild}>test1</motion.div>
function Menu() {
     var cardsData = [
      {img:img1,title:"food 1"},
      {img:img2,title:"food 2"},
      {img:img1,title:"food 3"},
      {img:img2,title:"food 4"},
      {img:img1,title:"food 5"},
      {img:img2,title:"food 6"},
      {img:img1,title:"food 7"},
      {img:img2,title:"food 8"}
   ];
    
     var cards = cardsData.map(card=>{
         return(
            <div className="card" key={card.title} style={{width: '18rem',margin:10}}>
               <img style={{height:"200px"}} className="card-img-top" src={card.img} alt="Card image cap"/>
               <div className="card-body">
               <h5 className="card-title">{card.title}</h5>
               <p className="card-text">Some description of the food in the Image</p>
               <a href="#" className="btn btn-dark">Buy Now</a>
               </div>
             </div>
         )
     })
     return(
        <motion.div
         className='container'
          id="container_menu"
          variants={anim}
          initial="initial"
          animate="animate"
          exit="exit">
             <h1 className='text-center'><span>M</span>enu</h1>
             <div  id="cards">
                {cards}
             </div>
         </motion.div>
     )
}
   


export default Menu

