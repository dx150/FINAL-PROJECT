import { GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../actionTypes";

const initialState = {
    authUser:false,
    load:true,
    user:null
};

const authUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER:
      localStorage.setItem('token', payload.token )
      localStorage.setItem('user', "user" )
    return { ...state, authUser:true, load:false, user: payload.newUser}
    case LOGIN:
        localStorage.setItem('token', payload.token )
        localStorage.setItem('user', "user" )
        return { ...state, authUser:true, load:false, user: payload.foundUser}
     case GET_CURRENT:
        return { ...state, authUser:true, load:false, user: payload.user}
    case LOGOUT :
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return {...state, authUser:false, load:false, user:null}

  default:
    return state
  }

}

export default authUserReducer