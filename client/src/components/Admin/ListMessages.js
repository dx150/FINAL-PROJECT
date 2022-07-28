import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListMsgs } from '../../JS/Actions/AdminActions'
import MessageCard from './MessageCard'

function ListMessages() {
  const loading = useSelector((state)=>state.adminReducer.load)
  const messages = useSelector((state)=>state.adminReducer.msgs)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch( getListMsgs())
  }, [dispatch])

  return (
    <div style={{margin:'15px',display:'inlineBlock', gap:'30px', flexWrap:'wrap'}}>
    {loading? 
    
    <span className="loader">Loading..</span>
    : messages.map((msg,i)=>(<MessageCard msg={msg} key={i}/>)) }
  </div>
  )
}

export default ListMessages