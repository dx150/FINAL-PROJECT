import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

function DetailsJob() {
  const  navigate=useNavigate();
//   const [loading, setLoading] = useState(true);
  const jobs = useSelector((state)=>state.OffreReducer.allJobs)
  const {id}=useParams() 
  const job=jobs.find(job=>job._id==id)
 
  return (

    <div className="courses-container">
  <div className="course">
      
      <div className="course-info">

          <h6>Opening Date : {job.dateOuverture}</h6>          
          <h5 style={{marginTop:"15px"}}><h6>Offre</h6>{job.offreName}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Description</h6>{job.offreDescription}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Categorie</h6>{job.offreCategorie}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Nbre Posts</h6>{job.nombrePostes}</h5>
          <h6>Opening Date : {job.dateFermeture}</h6>
          
          <div className='twiceBtn'>
          <button className="btnCardEdit"><Link to={`/Jobs/Details/PostulerJob/${job._id}`} style={{textDecoration:'none',color:'#fff'}}>Postuler</Link></button>
          <button className="btnCard"><Link to='/Jobs' style={{textDecoration:'none',color:'#fff'}}>Back</Link></button>
          </div>
           </div>
  </div>
</div>


//     <div>
        


//         <section className='popup'>
//             <div className="content">
//                 <h2  style={{display:'inline'}}>  {job.offreName} 
//                 <div> Campanie :{ job.recruteurId.recruteurName } </div></h2>            
//                 <p className="rating">Number of Posts : {job.nombrePostes}</p>
//                 <div className="plot">                    
//                   <p>Description: {job.offreDescription}</p>
//                 </div>
//                 <button className="back"  onClick={()=>navigate('/Jobs')}>Back</button>
//             </div>
//         </section>
    
// </div>



  )
}

export default DetailsJob

