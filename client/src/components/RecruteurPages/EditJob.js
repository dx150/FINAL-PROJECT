import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { EditJobs } from '../../JS/Actions/OffreActions'
function EditJob() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [offreName, setOffreName] = useState("")
  const [offreDescription, setOffreDescription] = useState("")
  const [offreCategorie, setOffreCategorie] = useState("")
  const [nombrePostes, setNombrePostes] = useState(0)
  const [dateOuverture, setDateOuverture] = useState("")
  const [dateFermeture, setDateFermeture] = useState("")
  const jobs = useSelector((state)=>state.OffreReducer.allJobs)
  const {id}=useParams() 
  const job=jobs.find(job=>job._id==id)

  useEffect(()=>{
   job &&  setOffreName(job.offreName)
   job &&  setOffreDescription(job.offreDescription)
   job &&  setOffreCategorie(job.offreCategorie)
   job &&  setNombrePostes(job.nombrePostes)
   job &&  setDateOuverture(job.dateOuverture)
   job &&  setDateFermeture(job.dateFermeture)   
  },[id])
  return (
    <div className='editUser'>
        <div className="centerP">
  <h1>Edit Job</h1>
  <form>    
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
      <input type="text" required="required" onChange={(e)=>setDateFermeture(e.target.value)} value={dateFermeture}/>
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
      <input type="button" value="submit" onClick={()=>{dispatch(EditJobs(id,{nombrePostes,dateFermeture,dateOuverture,offreCategorie,offreDescription,offreName}));navigate('/MyJobs')}}/>
    </div>
  </form>
</div>
    </div>
  )
}

export default EditJob