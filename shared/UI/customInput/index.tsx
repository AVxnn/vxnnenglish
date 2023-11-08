import React from 'react'
import styles from "./customInput.module.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
  typeInput: 'default' | 'secondary'
  sizeInput: "m" | 's'
  className?: string;
  id?: string;
  ILink?: string;
  errors: any
  style?: any;
};
 
const CustomInput = ({ full = false, sizeInput, errors, typeInput, ...attributes}: InputProps) => {
  console.log(errors)
    return <input className={`${styles.customInput} ${styles[typeInput]} ${styles[sizeInput]} ${full ? styles.width : ''}`} {...attributes}/>;
}

export default CustomInput