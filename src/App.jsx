
import Botton from "./bottons";
import styles from"./App.module.css";
import Input from "./input";
import { useState } from "react";
function App() {
 const [calVal,setCalVal]=useState("");
 const buttonClick=(buttonText)=>{
   if(buttonText==="c"){
   setCalVal("");
   }
   else if(buttonText==="="){
   const result=eval(calVal);
   setCalVal(result)
   }
   else if(buttonText==="Delete"){
    setCalVal(calVal.slice(0,-1));
   }
   else{
   const newvalue= calVal + buttonText;
   setCalVal(newvalue);
   }
 }


  return <center>
    <h1 className={styles.head}>CALCULATOR</h1>
     <div className={styles.calculator}>
 <Input inputValue={calVal}></Input>
 <Botton buttonClick={buttonClick}></Botton>
 
  </div>
  </center>
   
  
}

export default App
