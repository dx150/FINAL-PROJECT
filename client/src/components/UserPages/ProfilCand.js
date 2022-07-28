import axios from 'axios'
import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteAccountUser, getCurrent } from '../../JS/Actions/userAction'
import { confirmAlert } from 'react-confirm-alert' 
import 'react-confirm-alert/src/react-confirm-alert.css'; 


function ProfilCand() {

const user = useSelector((state)=>state.authUserReducer.user)
const dispatch = useDispatch()
const navigate = useNavigate()
const [imageCand, setImageCand] = useState(null)

    const EditPhoto=async()=>{
    const data= new FormData()
    data.append('imageCand',imageCand)
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
         await axios.put('/api/accountUser/updatePhotoCand',data,config)
        dispatch(getCurrent())
    } catch (error) {
        console.log(error)
        
    }
   }
//confirmation before delete account
   const submit = () => {
    confirmAlert({
      title: 'Confirm to delete your account',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: ()=> {dispatch(deleteAccountUser());navigate('/')}
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }
  return (
<div className='profilUser'>
<div className="containerP emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                        <img src={user&&user.imageCand ? `images/${user.imageCand}`: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"} alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"  onChange={(e)=>setImageCand(e.target.files[0])}/>
                                
                             </div>
                            

                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                    {user?.firstName} <span>{user?.lastName}</span>  
                                    </h5>
                                    <h6>
                                    {user?.bio}
                                    </h6>
                                    
                            <ul className="navb nav-tabs" id="myTab" role="tablist">
                                <li className="nav-iteme">
                                    <div className="nav-link-b active" id="home-tab"  role="tab"  aria-selected="true">About</div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        
                        <div  className="profile-edit-btn" name="btnAddMore"><Link className='editP' to='/ProfilCand/EditProfil'>Edit Profil</Link></div>
                        <div  className="profile-edit-PS" name="btnAddMore"><Link className='password' to='/ProfilCand/ChangePassword'>Change Password</Link></div>
                        <div  className="profile-edit-PS Confirm-Img" name="btnAddMore" onClick={EditPhoto}>Change Photo</div>

                    </div>
                </div>

                <div className="row">

                    <div className="col-md-4">
                        <div className="profile-work">                            
                            <p>SKILLS</p>
                            <div className='aa'>{user?.skills}</div><br/>                            
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>First Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user?.firstName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Last Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user?.lastName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user?.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user?.numTel}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user?.specialite}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Adress</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user?.adress}</p>
                                            </div>
                                        </div>

                           
                            
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="col-md-2">
                        <input  className="Delete-Acc" style={{marginTop:"40px",marginLeft:'40px'}} name="btnAddMore" value="Delete Account"  onClick={submit}/>
                    </div>
                </div>
                
            </form>           
        </div>
    </div>
  )
}

export default ProfilCand