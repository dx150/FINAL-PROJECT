import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListUsers } from '../../JS/Actions/AdminActions'
import UserCard from './UserCard'

function ListUser() {
  const loading = useSelector((state)=>state.adminReducer.load)
  const users = useSelector((state)=>state.adminReducer.AllUsers)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch( getListUsers())
  }, [dispatch])
  return (
    <div style={{margin:'15px',display:'flex', gap:'20px', flexWrap:'wrap'}}>
    {loading? 
    
    <span className="loader">Loading..</span>
    : users.map((user,i)=>(<UserCard user={user} key={i}/>)) }
  </div>
  )
}

export default ListUser