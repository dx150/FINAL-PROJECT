import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getJobs, myJobs } from '../JS/Actions/OffreActions'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../JS/Actions/userAction'
import { getListMsgs, getListOffers, getListRecs, getListUsers } from '../JS/Actions/AdminActions'
import {AiOutlineHome, AiOutlineContacts }from 'react-icons/ai'
import {FaSignInAlt, FaUserTie} from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'
import {MdAdminPanelSettings, MdMessage, MdOutlineLocalOffer, MdFindInPage, MdLibraryAdd} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {RiLogoutBoxLine}from 'react-icons/ri'

function Navigation() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const authUser= useSelector((state)=>state.authUserReducer.authUser)
	const authRec = useSelector((state)=>state.authRecReducer.authRec)
  const {user} = useSelector((state)=>state.authUserReducer)
  return (

	<div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      Find<span className="logo2"><MdFindInPage/>Job</span>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
    
 { authUser ||authRec ?
 <div className="nav-links">
   
    
    {authUser && (user.role==="user")&&
    <>
       <div><Link  className='titreNav'to='/'><AiOutlineHome/>Home</Link></div>
      <div><Link  className='titreNav'to='/Jobs' onClick={()=>dispatch(getJobs())}><MdOutlineLocalOffer/>Jobs</Link></div>
      <div><Link  className='titreNav'to='/ProfilCand'><ImProfile/>My Profil</Link></div>
    </>
    }
       
       {authUser && user.role==="admin" &&
    <>
      
      <div><Link  className='titreNav'to='/'><AiOutlineHome/>Home</Link></div>
      <div><Link  className='titreNav'to='/ProfilCand'><MdAdminPanelSettings/>Admin </Link></div>
      <div><Link  className='titreNav'to='/ListUsers' onClick={()=>dispatch(getListUsers())}><FiUsers/>Users </Link></div>
      <div><Link  className='titreNav'to='/ListRecruiters'onClick={()=>dispatch(getListRecs())}><FaUserTie/>Recruiters </Link></div>
      <div><Link  className='titreNav'to='/ListJobs' onClick={()=>dispatch(getListOffers())}><MdOutlineLocalOffer/>Offers </Link></div>
      <div><Link  className='titreNav'to='/ListMessages'onClick={()=>dispatch(getListMsgs())}><MdMessage/>Messages </Link></div>
    </>
     }
  {authRec &&  
  <>
  <div><Link  className='titreNav'to='/HomeRec'><AiOutlineHome/>Home</Link></div>
  <div><Link  className='titreNav'to='/MyJobs' onClick={()=>dispatch(myJobs())} ><MdOutlineLocalOffer/>My Jobs</Link></div>
  <div><Link  className='titreNav'to='/ProfilRec'><ImProfile/>Profil</Link></div> 
  <div><Link  className='titreNav'to='/addJob'><MdLibraryAdd/>Add Job</Link></div>
  </> 	
  }
  {

  }
  
	
  <div className=" btn-logout" onClick={()=>{dispatch(logout());navigate('/AccountUser')}}><RiLogoutBoxLine/>Logout</div>
  
  
	</div>
   :
  <div className="nav-links">
  <div><Link  className='titreNav'to='/'><AiOutlineHome />Home</Link></div>
  <div><Link  className='titreNav'to='/Jobs' onClick={()=>dispatch(getJobs())}><MdOutlineLocalOffer/>Jobs</Link></div>
  <div><Link  className='titreNav'to='/Contact'><AiOutlineContacts />Contact Us</Link></div>
  <div><Link className="btn" to='/AccountUser'><FaSignInAlt/>Account User</Link></div>
  <div><Link className="btn" to='/AccountRec'><FaSignInAlt />Account Recruiter</Link></div>
  </div>
   
  }
  
</div>


    
  )
}

export default Navigation