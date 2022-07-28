import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getCandidature } from '../../JS/Actions/CandidatureActions';
import { DeleteJob } from '../../JS/Actions/OffreActions';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function MyJobCard({job}) {
  const dispatch=useDispatch()
 
  const submit = () => {
    confirmAlert({
      title: 'Confirm to delete job',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: ()=> {dispatch(DeleteJob(job._id))}
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }
  return (
    <div className='bdCard'>
      
      
    <div className="courses-container">
  <div className="course">
      
      <div className="course-info">
      <button className='BtnCardDelete'onClick={submit}>Delete Job</button>

          <h6>Opening Date : {job.dateOuverture}</h6>          
          <h5 style={{marginTop:"15px"}}><h6>Offre</h6>{job.offreName}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Description</h6>{job.offreDescription}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Categorie</h6>{job.offreCategorie}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Nbre Posts</h6>{job.nombrePostes}</h5>
          <h6>Opening Date : {job.dateFermeture}</h6>
          
          <div className='twiceBtn'>
          <button className="btnCardEdit"><Link to={`/MyJobs/EditJob/${job._id}`} style={{textDecoration:'none',color:'#fff'}}>Edit Job</Link></button>
          <button className="btnCard"><Link to={`/MyJobs/ListCandidates/${job._id}`} style={{textDecoration:'none',color:'#fff'}}  onClick={()=>dispatch(getCandidature(job._id))}>List of Candidates</Link></button>
          </div>
           </div>
  </div>
</div>






      
    
    
  </div>
  )
}

export default MyJobCard