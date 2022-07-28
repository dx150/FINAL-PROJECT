import React , {useEffect, useState} from 'react'
import {AiOutlineFacebook, AiOutlineLinkedin, AiOutlineYoutube }from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {rechercheUser}  from '../../JS/Actions/recAction'
import FoundUser from './FoundUser'
function HomeRec() {
  const allUsers= useSelector((state)=>state.OffreReducer.users)
  const [search , setSearch] = useState("")
  const dispatch= useDispatch()
  const finduser =(e)=>{
    e.preventDefault()
    dispatch(rechercheUser(search))
    setSearch('')
  }
  
  useEffect(() => {
   dispatch( rechercheUser())
  }, [dispatch])
  return (
    <div className='bodySearch'>
      
       <div className='welcome'>Find Candidate Cv</div>  
      <div className="button_box2 mt-5">
          <form className="form-wrapper-2 cf">
          <input type="text" value={search} placeholder="Search here..." required onChange={e=>setSearch(e.target.value)}/>
          <button  onClick={finduser} >Search</button>
          </form>
          </div >      
         <div className='Found'> {
            allUsers.map((user,i)=>(< FoundUser  user={user} key={i} /> ))
          }
          </div>


          <footer className="footer-content">
    <h3>Find Job</h3>
    <p>Build Your Future.</p>
    <p>Join us & Explore many of Jobs.</p>
    <ul className="socials">
    
    <li><p ><i ><AiOutlineFacebook/></i></p></li>
    <li><p ><i ><FiTwitter/></i></p></li>
    <li><p ><i ><AiOutlineLinkedin/></i></p></li>
    <li><p ><i ><AiOutlineYoutube/></i></p></li>
 </ul>
 <p>copyright &copy;2022 <Link className='CopyRight' style={{textDecoration:'none'}} to='/HomeRec'>FindJob</Link></p>  



    </footer>




    </div>
  )
}

export default HomeRec