import React from 'react'
// import { useNavigate } from 'react-router-dom'

function CadidatureCard({candidat}) {
  

  return (
    <div className="card">
  {/* <img src={candidat&&candidat.candidatId.imageCand ? `images/${candidat.candidatId.imageCand}`: "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="" style={{width:"100%"}}/> */}
  <div className="container">
    <h4><b>{candidat.candidatId.email}</b></h4>
    <p><b>Diplome :</b>  {candidat.diplome}</p>
    <p><b>Experience : </b>{candidat.experience}</p>
    <p><b>Formation : </b>{candidat.formation}</p>
    <p><b>Langues : </b>{candidat.langues}</p>

    <h4> <b>Profil :</b> {candidat.candidatId.firstName} {candidat.candidatId.lastName}</h4>
    <p> <b>Skills :</b> {candidat.candidatId.skills}</p>
    <p><b>Specialité : </b>{candidat.candidatId.specialite}</p>
    <p> <b>Number Phone :</b> {candidat.candidatId.numTel}</p>
        
  </div>
</div>
    
  )
}

export default CadidatureCard