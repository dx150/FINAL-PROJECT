import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editPhotoUser } from '../../JS/Actions/userAction'

function ChangePhotoUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [img, setImg] = useState("")
    const user = useSelector((state)=>state.authUserReducer.user)
    useEffect(() => {
        user && setImg(user.imageCand)        
       }, [user])
  return (
    <div className='editUser'>
        <div className="centerP">
  <h1>Profile picture</h1>
  <form>    
   
    <div className="inputbox">
      <input type="file" required="required"  onClick={(e)=>setImg(e.target.value)} value={img} alt='image User'/>
      
    </div>
    

    <div className="inputbox">        
      <input type="button" value="submit" onClick={()=>{dispatch(editPhotoUser({img}));navigate('/ProfilCand')}} />
    </div>
  </form>
</div>
    </div>
  
  )
}

export default ChangePhotoUser