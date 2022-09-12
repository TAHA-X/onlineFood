import Nav from "./components/navbar";
import {AnimatePresence} from "framer-motion";
import Footer from "./components/Footer";
import {useEffect, useState,useCycle} from "react";
import Modal from "./modal";
import {Loder} from "./Loder";
function App() {
  var [ShowModal,SetShowModal] = useState(false);
  var [LoderTime,SetLoderTime] = useState(true);
  useEffect(()=>{
     setTimeout(()=>{
         SetLoderTime(false)
         
     },3000)
  })

  return (
    <div> 
     {
      LoderTime ? <Loder /> :  
    <AnimatePresence onExitComplete={()=>SetShowModal(false)}>

      <div className="App">
        <Nav ShowModal={ShowModal} SetShowModal={SetShowModal}/>
        <Footer />
      </div>
      
    </AnimatePresence>
}
  
  </div>
     
  );
  
}


export default App;
