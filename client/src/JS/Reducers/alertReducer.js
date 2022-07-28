import { REMOVEALERT, SETALERT } from "../actionTypes"

const initialState = []

function alert(state = initialState, { type, payload })  {
  switch (type) {

  case SETALERT:
    return [...state, payload ]
    case REMOVEALERT:
        return state.filter(alert=>alert.id!==payload) 

  default:
    return state
  }
}

export default alert