import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addJobs } from '../../JS/Actions/OffreActions'

function AddJob() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [offreName, setOffreName] = useState("")
  const [offreDescription, setOffreDescription] = useState("")
  const [offreCategorie, setOffreCategorie] = useState("")
  const [nombrePostes, setNombrePostes] = useState(0)
  const [dateOuverture, setDateOuverture] = useState("")
  const [dateFermeture, setDateFermeture] = useState("")
  
  return (
    <div className='editUser'>
        <div className="centerP">
  <h1>Add Job</h1>
  <form>    
  <input className='backBtn' type="button" value="Back" onClick={()=>{navigate('/MyJobs')}}/>

    <div className="inputbox">
      <input type="text" required="required"  onChange={(e)=>setOffreName(e.target.value)} value={offreName} />
      <span>Job Name</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setOffreDescription(e.target.value)} value={offreDescription} />
      <span>Job Description</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setOffreCategorie(e.target.value)} value={offreCategorie} />
      <span>Job Category</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" autoComplete='1' onChange={(e)=>setDateFermeture(e.target.value)} value={dateFermeture}/>
      <span>Closing date</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setDateOuverture(e.target.value)} value={dateOuverture}/>
      <span>Opening date</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required" onChange={(e)=>setNombrePostes(e.target.value)} value={nombrePostes}/>
      <span>Number Of Posts</span>
    </div>
    

    <div className="inputbox">
      <input type="button" value="submit" onClick={()=>{dispatch(addJobs({nombrePostes,dateFermeture,dateOuverture,offreCategorie,offreDescription,offreName}));navigate('/MyJobs')}}/>
    </div>
  </form>
</div>
    </div>
  )
}

export default AddJob