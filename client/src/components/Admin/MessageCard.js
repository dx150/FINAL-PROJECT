import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMsgContact } from '../../JS/Actions/AdminActions'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function MessageCard({msg}) {
  const dispatch=useDispatch()
  const submit = () => {
    confirmAlert({
      title: 'Confirm to delete job',
      message: 'Are you sure to do this.',
      buttons: [
      {
        label: 'Yes',
        onClick: ()=> {dispatch(deleteMsgContact(msg._id))}
      },
      {
        label: 'No',
        onClick: () => alert('Click No')
      }
      ]
    });
    }

  return (
    <div className='bodyMsg'>
      <div className="blog_post1">
  
  <div className="container_copy1">
    <h4>{msg.Name}</h4>
    <h3>{msg.email}</h3>
    <p>{msg.objetMsg}</p>
    <div className="btn_primary1" onClick={submit}>delete</div>
  </div>
  
</div>
    </div>
  )
}

export default MessageCard