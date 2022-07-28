import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { getCandidature } from '../../JS/Actions/CandidatureActions'
import CadidatureCard from './CadidatureCard'
function ListCandidatures() {
  const loading = useSelector((state)=>state.CandidatureReducer.load)
  const candidatures = useSelector((state)=>state.CandidatureReducer.offreCandidats)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch( getCandidature())
  }, [dispatch])
 
  
  return (
    <div className='bodyCard10'> 
    {loading?   
   <span className="loader">Loading..</span>
  :candidatures.map((candidat,i)=>(< CadidatureCard candidat={candidat} key={i}/>)) }
  </div>
  )
}

export default ListCandidatures