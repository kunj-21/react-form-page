import React from "react";
import style from "./form.module.css";
import Button from "../button/Button";
import { FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";

const Form = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [textarea, settextarea] = useState('');
let onsubmit=(e)=>{
  e.preventDefault()
  setname(e.target[0].value)
  setemail(e.target[1].value) 
  settextarea(e.target[2].value)
 
  
}
  return (
    <section className={`${style.container}`}>
      <div className={style.form}>
        <div className={style.top}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<FaMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL"
          icon={<IoMdMail fontSize="24px" />}
        />
        <form onSubmit={onsubmit}>
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="Email">Email</label>
            <input type="Email" name="Email" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="name">Text</label>
           <textarea name="name" rows={12} ></textarea>
          </div>
          <div style={{display:'flex',justifyContent:'end'}}>
          <Button
         
          text="SUBMIT BUTTON"
        
        />
          </div>
          <div>{name+""+email+""+textarea}</div>

        </form>
        
      </div>
      <div className={style.img}>
        <img src="./img/img.png" alt="img" />
      </div>
    </section>
  );
};

export default Form;
