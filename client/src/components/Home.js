import React, { useState } from 'react'
import {AiOutlineFacebook, AiOutlineLinkedin, AiOutlineYoutube }from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FindJobs } from '../JS/Actions/OffreActions'
import FindJob from './UserPages/FindJob'


function Home() {
  const foundJobs= useSelector((state)=>state.OffreReducer.allFindJobs)
  const [search , setSearch] = useState("")
  const dispatch= useDispatch()
  const findJobUser =(e)=>{
    e.preventDefault()
    dispatch(FindJobs(search))
    setSearch('')
  }
  return (
    <div>
    
    <div className='bodySearch'>  
       <div className='welcome'>Find Your Job</div>      
      <div className="button_box2 mt-5">
          <form className="form-wrapper-2 cf">
          <input type="text" placeholder="Search here..." required onChange={e=>setSearch(e.target.value)}/>
          <button  onClick={findJobUser}>Search</button>
          </form>
          </div>      
          <div className='Found'> {
            foundJobs.map((jobs,i)=>(< FindJob  jobs={jobs} key={i} /> ))
          }
          </div>
    </div>
    <footer className="footer-content">
    <h3>Find Job</h3>
    <p>Build Your Future.</p>
    <p>Join us & Explore Many Of Jobs.</p>
    <ul className="socials">
    
    <li><p ><i ><AiOutlineFacebook/></i></p></li>
    <li><p ><i ><FiTwitter/></i></p></li>
    <li><p ><i ><AiOutlineLinkedin/></i></p></li>
    <li><p ><i ><AiOutlineYoutube/></i></p></li>
 </ul>
 <p>copyright &copy;2022 <Link className='CopyRight' style={{textDecoration:'none'}} to='/'>FindJob</Link></p>  

    </footer>
    </div>
    
  )
}

export default Home