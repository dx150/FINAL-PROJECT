import { GET_CANDIDATURE } from "../actionTypes";

const initialState = {
offreCandidats :[],
  load:true,
}
const CandidatureReducer= (state = initialState, { type, payload }) => { 
  switch (type) {  
    case GET_CANDIDATURE:   
    return { ...state, offreCandidats:payload.offreCandidats,load:false } 
    

  default:
    return state
  }
}
export default CandidatureReducer;