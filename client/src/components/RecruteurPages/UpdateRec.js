import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editProfilRec } from '../../JS/Actions/recAction'

function UpdateRec() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Recruteur = useSelector((state)=>state.authRecReducer.Recruteur)
  const [recruteurName, setRecruteurName] = useState("")
  const [description, setDescription] = useState("")
  const [numContact, setNumContact] = useState("")
  const [adress, setAdress] = useState("")
  const [email, setEmail] = useState("")
  useEffect(() => {
    Recruteur && setRecruteurName(Recruteur.recruteurName)
    Recruteur &&  setDescription(Recruteur.description)
    Recruteur && setNumContact(Recruteur.numContact)
    Recruteur && setAdress(Recruteur.adress)
    Recruteur && setEmail(Recruteur.email)
     
   }, [Recruteur])
  return (
    <div className='editUser'>
        <div className="centerP">
  <h1>Edit Profil</h1>
  <form>
  <input className='backBtn' type="button" value="Back" onClick={()=>{navigate('/ProfilRec')}}/>

    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setRecruteurName(e.target.value)} value={recruteurName}/>
      <span>Campanie</span>
    </div> 
    
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setEmail(e.target.value)} value={email} />
      <span>email</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setNumContact(e.target.value)} value={numContact} />
      <span>Contact number</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setAdress(e.target.value)} value={adress} />
      <span>Adress</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setDescription(e.target.value)} value={description}/>
      <span>Description</span>
    </div>

    <div className="inputbox box">
      <input type="button" value="submit" onClick={()=>{dispatch(editProfilRec({recruteurName,adress,description,numContact,email}));navigate('/ProfilRec')}}/>
    </div>
    

  </form>
</div>
    </div>
  )
}

export default UpdateRec