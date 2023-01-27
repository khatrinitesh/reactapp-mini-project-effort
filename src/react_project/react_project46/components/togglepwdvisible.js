import React,{useState } from 'react';
import { BsFillEyeSlashFill,BsFillEyeFill } from "react-icons/bs";

export default function TogglePwdVisible() {

    
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    // handle change
    const handlePasswordChange =(event)=>{
        setPasswordInput(event.target.value);
    }

    // handle toggle password
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
  return (
    <div>
         <div className="row">
            <div className="col-sm-3">
                <div className="input-group my-4 mx-4">
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />

                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <BsFillEyeSlashFill/>:<BsFillEyeFill/> }
                     </button>
                    </div>
                </div>
                
            </div>
      </div>
    </div>
  )
}
