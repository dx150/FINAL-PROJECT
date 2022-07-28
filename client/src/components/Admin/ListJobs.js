import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListOffers } from '../../JS/Actions/AdminActions'
import JobCard from './JobCard'

function ListJobs() {
  const loading = useSelector((state)=>state.adminReducer.load)
  const allJobs = useSelector((state)=>state.adminReducer.allJobs)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch( getListOffers())
  }, [dispatch])

  return (
    <div style={{margin:'15px',display:'flex', gap:'20px', flexWrap:'wrap'}}>
    {loading? 
    
    <span className="loader">Loading..</span>
  
    : allJobs.map((job,i)=>(<JobCard job={job} key={i}/>)) }
  </div>
  )
}

export default ListJobs