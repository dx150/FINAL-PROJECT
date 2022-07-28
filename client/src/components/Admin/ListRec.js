import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListRecs } from '../../JS/Actions/AdminActions'
import RecruiterCard from './RecruiterCard'

function ListRec() {
 
  const loading = useSelector((state)=>state.adminReducer.load)
  const recruteurs = useSelector((state)=>state.adminReducer.allRecruteurs)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch( getListRecs())
  }, [dispatch])

  return (
    <div style={{margin:'15px',display:'flex', gap:'20px', flexWrap:'wrap'}}>
    {loading? 
    
    <span className="loader">Loading..</span>
    : recruteurs.map((recruteur,i)=>(<RecruiterCard recruteur={recruteur} key={i}/>)) }
  </div>
  )
}

export default ListRec