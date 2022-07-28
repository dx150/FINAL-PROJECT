import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editProfilUser } from '../../JS/Actions/userAction'

function UpdateUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state)=>state.authUserReducer.user)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [adress, setAdress] = useState("")
  const [email, setEmail] = useState("")
  const [numTel, setNumTel] = useState("")
  const [specialite, setSpecialite] = useState("")
  const [bio, setBio] = useState("")
  const [skills, setSkills] = useState("")

  useEffect(() => {
   user && setFirstName(user.firstName)
   user &&  setLastName(user.lastName)
   user && setAge(user.age)
   user && setAdress(user.adress)
   user && setEmail(user.email)
   user && setNumTel(user.numTel)
   user && setSpecialite(user.specialite)
   user && setBio(user.bio)
   user && setSkills(user.skills)
  }, [user])
  
  return (
    <div className='editUser'>
        <div className="centerP">
  <h1>Edit Profil</h1>
  <form>    
  <input className='backBtn' type="button" value="Back" onClick={()=>{navigate('/ProfilCand')}}/>

    <div className="inputbox">
      <input type="text" required="required"  onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
      <span>firstName</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setLastName(e.target.value)} value={lastName} />
      <span>LastName</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setAge(e.target.value)} value={age} />
      <span>Age</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <span>email</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setNumTel(e.target.value)} value={numTel}/>
      <span>Phone number</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setAdress(e.target.value)} value={adress}/>
      <span>Adress</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setSpecialite(e.target.value)} value={specialite} />
      <span>Speciality</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setSkills(e.target.value)} value={skills} />
      <span>Skills</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setBio(e.target.value)} value={bio} />
      <span>Bio</span>
    </div>

    <div className="inputbox">
      <input type="button" value="submit" onClick={()=>{dispatch(editProfilUser({firstName,lastName,age,bio,adress,specialite,numTel,email,skills}));navigate('/ProfilCand')}}/>
    </div>
  </form>
</div>
    </div>
  )
}

export default UpdateUser