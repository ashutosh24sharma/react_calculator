import styles from "./input.module.css"
const Input=({inputValue })=>{
   return  <input type="text" className={styles.display} value={inputValue} readOnly/>
}
export default Input;