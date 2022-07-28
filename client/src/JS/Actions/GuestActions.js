import axios from "axios"
import { FAIL, POST_MESSAGE } from "../actionTypes"
import { setAlert } from "./alertActions"

export const postMSG =( newMsg)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/guest/contact',newMsg)
        console.log(res.data)    
        dispatch({type:POST_MESSAGE, payload: res.data})
    } catch (error) {
        dispatch({type:FAIL})
        error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));
    }
    } 