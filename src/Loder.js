import react from "react";
import {motion,useCycle} from "framer-motion";
var LoderAnim = {
    animate1:{
        x:[20,-20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25,
            },
            ease:"easeOut"
        },
        
    },
    animate2:{
        y:[0,-40],
        x:0,
        transition:{
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:"easeOut"
            },
            
        }
    }
}
export  var Loder=()=>{
  
    var [animations,CycleAnim] = useCycle("animate1","animate2")
    return(
        
        <>
            <motion.div
            className="loderCircle"
            variants={LoderAnim}
            animate={animations}
            >
            </motion.div>
         
        </>
        
    )
}
