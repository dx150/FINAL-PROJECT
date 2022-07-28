import { GET_MESSAGES, GET_OFFERS, GET_RECS, GET_USERS } from "../actionTypes";

const initialState = {
    AllUsers :[],
    allRecruteurs: [],
    msgs:[],
    allJobs:[],
    load:true,
    
}

const adminReducer= (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_USERS:
    return { ...state, AllUsers:payload.AllUsers,load:false }
  case GET_RECS:
      return { ...state, allRecruteurs:payload.allRecruteurs,load:false }
  case GET_MESSAGES:
      return { ...state, msgs:payload.msgs,load:false }
  case GET_OFFERS :
    return { ...state, allJobs:payload.allJobs,load:false } 


  default:
    return state
  }
}

export default  adminReducer;