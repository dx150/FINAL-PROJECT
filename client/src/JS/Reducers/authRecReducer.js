import {  GET_CURRENT_REC, LOGIN_REC, LOGOUT,REGISTER_REC } from "../actionTypes";

const initialState = {
    authRec:false,
    load:true,
    Recruteur:null
};

const authRecReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER_REC:
      localStorage.setItem('token', payload.token )
      localStorage.setItem('user', "recruteur" )
    return { ...state, authRec:true, load:false, Recruteur: payload.newRec}
    case LOGIN_REC:
        localStorage.setItem('token', payload.token )
        localStorage.setItem('user', "recruteur" )
        return { ...state, authRec:true, load:false, Recruteur: payload.foundRec}
     case GET_CURRENT_REC:
        return { ...state, authRec:true, load:false, Recruteur: payload.Recruteur}
    case LOGOUT :
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return {...state, authRec:false, load:false, Recruteur:null}

  default:
    return state
  }

}

export default authRecReducer