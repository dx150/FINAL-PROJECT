import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editPasswordRec } from '../../JS/Actions/recAction'
import { confirmAlert } from 'react-confirm-alert' 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
function UpdatePassRec() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Recruteur = useSelector((state)=>state.authUserReducer.Recruteur)
  const [password,setPassword]=useState("")
  useEffect(() => {
    Recruteur && setPassword(Recruteur.setPassword)
    
   }, [Recruteur])
    //confirmation before update password
  const submit = () => {
    confirmAlert({
      message: 'Confirm to update your Password.',
      buttons: [
        {
          label: 'Yes',
          onClick: ()=> {dispatch(editPasswordRec({password}));navigate('/ProfilRec')}
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }
  return (
    <div className='Pass'>
    <div className="center">
<h1>Change Password</h1>
<form>
<input className='backBtn' type="button" value="Back" onClick={()=>{navigate('/ProfilRec')}}/>
<div className="inputbox">
  <input type="text" required="required" onChange={(e)=>setPassword(e.target.value)} value={password}/>
  <span>Password</span>
</div>
<div className="inputbox">
  <input type="button" value="submit" onClick={submit}/>
</div>
</form>
</div>
</div>
  )
}

export default UpdatePassRec