import React from 'react'
import { Link } from 'react-router-dom'

function JobCard({job}) {
  return (
    <div className='bdCard'>
      
      
      <div className="courses-container">
	<div className="course">
		<div className="course-preview">
			<h6>Recruiter</h6>
			<h2>{job.recruteurId.recruteurName}</h2>
			
		</div>
		<div className="course-info">
			
			<h6>Job : {job.dateOuverture}</h6>
			
			<h3 style={{marginTop:"15px"}}>{job.offreName}</h3>
      
			<button className="btnCard"><Link to={`/Jobs/Details/${job._id}`} style={{textDecoration:'none',color:'#fff'}}>View more</Link></button>
		</div>
	</div>
</div>

    </div>

  )
}

export default JobCard