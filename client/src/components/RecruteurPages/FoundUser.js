import React from 'react'

function FoundUser({user}) {
  return (
    <div className='bodyFound'>

<figure className="snip0045 red">
	<figcaption>
		<div className='critereP'>
		<h2>{user.firstName} <span>{user.lastName}</span></h2>
		<h4>{user.email} </h4>
		<p className='specialite'>{user.numTel}</p>
		<p>{user.skills}</p>
		</div>
		
			
	</figcaption>
	<img src={user.imageCand ? `images/${user.imageCand}`: "https://bootdey.com/img/Content/avatar/avatar7.png"} alt=""/>	
	<div className='footerCard'>	
	<div className="position">{user.specialite}</div>
	</div>
</figure>

     



    </div>
  )
}

export default FoundUser