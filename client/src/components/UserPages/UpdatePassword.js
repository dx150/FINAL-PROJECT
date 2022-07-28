import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editPasswordUser } from '../../JS/Actions/userAction'
import { confirmAlert } from 'react-confirm-alert' 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function UpdatePassword() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state)=>state.authUserReducer.user)
  const [password,setPassword]=useState("")
  //confirmation before update password
  const submit = () => {
    confirmAlert({
      message: 'Confirm to update your Password.',
      buttons: [
        {
          label: 'Yes',
          onClick: ()=> {dispatch(editPasswordUser({password}));navigate('/ProfilCand')}
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }
  useEffect(() => {
    user && setPassword(user.setPassword)
    
   }, [user])

  return (
    <div className='Pass'>
        <div className="center">
  <h1>Change Password</h1>
  <form>
  <input className='backBtn' type="button" value="Back" onClick={()=>{navigate('/ProfilCand')}}/>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <span>Password</span>
    </div>
    <div className="inputbox">
      <input type="button" value="submit"  onClick={submit}/>
    </div>
  </form>
</div>
    </div>
  )
}

export default UpdatePassword