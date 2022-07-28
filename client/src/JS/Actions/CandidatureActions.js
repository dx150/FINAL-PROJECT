import axios from 'axios'
import { GET_CANDIDATURE } from '../actionTypes'


export const getCandidature=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        const res=await axios.get(`/api/accountRec/candidatures/${id}`,config)
        dispatch({type:GET_CANDIDATURE,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}