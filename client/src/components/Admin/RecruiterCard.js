import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteOneRec } from '../../JS/Actions/AdminActions'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function RecruiterCard({recruteur}) {
  const dispatch=useDispatch()
  const submit = () => {
	confirmAlert({
	  title: 'Confirm to delete recruiter',
	  message: 'Are you sure to do this.',
	  buttons: [
		{
		  label: 'Yes',
		  onClick: ()=> {dispatch(deleteOneRec(recruteur._id))}
		},
		{
		  label: 'No',
		  onClick: () => alert('Click No')
		}
	  ]
	});
  }
	return (
    <div className='BodyRec'>
      <div className="card-container">
	
	  <img className="roundRec" src={recruteur&&recruteur.imageRec ? `images/${recruteur.imageRec}`: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"} alt="user"/>
	<h3>{recruteur.recruteurName} </h3>
	<h6>{recruteur.adress}</h6>	
	<div className="skills">
		<h6>Email</h6>
		<ul>
			<li>{recruteur.email}</li>			
		</ul>
	</div>
	<span className="pro" onClick={submit}>Delete</span>
</div>

    </div>
  )
}

export default RecruiterCard