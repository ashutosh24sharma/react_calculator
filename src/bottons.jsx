import styles from "./bottons.module.css";
function Botton({buttonClick}) {
    const Arr = [ 'c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.','Delete'];

    return (  
        <div className={styles.buttons}>
            {Arr.map((buttonName)=>{  
                return <button key={buttonName} className={styles.button} onClick={()=>buttonClick(buttonName)}>{buttonName}</button> })}
         
           
         
         
      </div>
    );
}

export default Botton;