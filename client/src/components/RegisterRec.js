import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerRec } from '../JS/Actions/recAction'


function RegisterRec() {
  const [recruteurName,setRecruteurName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPasswod] = useState("")
	const dispatch=useDispatch()
	const navigate=useNavigate() 
  return (
    <div>
         <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your campany name" required onChange={(e)=>setRecruteurName(e.target.value)} value={recruteurName}/>
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
                <input  value="Sumbit" onClick={()=>dispatch(registerRec({recruteurName,email,password}, navigate))}/>
              </div>
              <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
            </div>
      </form>
    </div>
  )
}

export default RegisterRec