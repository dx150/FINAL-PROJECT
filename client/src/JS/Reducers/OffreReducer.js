import { FIND_JOB, GET_JOBS, MY_JOBS , RECHERCHEUSER} from "../actionTypes";

const initialState = {
  allJobs :[],
  load:true,
  users :[], 
  allFindJobs:[]
}
const OffreReducer= (state = initialState, { type, payload }) => { 
  switch (type) {
  case GET_JOBS:   
    return { ...state, allJobs:payload.allJobs,load:false } 
    case MY_JOBS:   
    return { ...state, allJobs:payload.myJobs,load:false } 
    
    case RECHERCHEUSER : 
    return {...state , users:payload.allCandidats,load:false}
    case FIND_JOB : 
    return {...state , allFindJobs:payload.allFindJobs,load:false}
  default:
    return state
  }
}
export default  OffreReducer;