import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {register} from '../JS/Actions/userAction'

function RegisterUser() {
    const [firstName, setFisrtName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPasswod] = useState("") 
const dispatch=useDispatch() 
const navigate=useNavigate()
  return (
    <div>
         <form >
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required onChange={(e)=>setFisrtName(e.target.value)} value={firstName}/>
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required onChange={(e)=>setPasswod(e.target.value)} value={password}/>
              </div>
              <div className="button input-box">
                <input  value="Sumbit" onClick={()=>dispatch(register({firstName,email,password}, navigate))}/>
              </div>
              <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
            </div>
      </form>
    </div>
  )
}

export default RegisterUser