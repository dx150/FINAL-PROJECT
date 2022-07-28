import axios from 'axios'
import { FAIL, GET_CURRENT_REC, LOADING, LOGIN_REC, LOGOUT, REGISTER_REC, RECHERCHEUSER } from '../actionTypes'
import { setAlert } from "./alertActions"

//Register Recruiter
export const registerRec =(newRec, navigate)=>async(dispatch)=>{
     
     dispatch({type:LOADING})
try {
    const res = await axios.post('/api/authRec/registerRec',newRec)
    console.log(res.data)
    dispatch({type:REGISTER_REC, payload:res.data})
    navigate('/ProfilRec')
} catch (error) {
    dispatch({type:FAIL, payload:error.response.data})
    error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));
}
}
//Login Recruiter
export const loginRec =(Recruteur, navigate)=>async(dispatch)=>{
dispatch({type:LOADING})
try {
    const res = await axios.post('/api/authRec/loginRec',Recruteur)
    dispatch({type:LOGIN_REC, payload: res.data})
    navigate('/MyJobs')
} catch (error) {
    dispatch({type:FAIL, payload:error.response.data})
    error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));
}
} 
//get_current_Rec
export const getCurrentRec =()=>async(dispatch)=>{
const config={
    headers:{
        authorization:localStorage.getItem('token')
    }
}
try {
    const res = await axios.get('/api/authRec/currentRec',config)
    console.log(res.data)

    dispatch({type:GET_CURRENT_REC, payload: res.data})
} catch (error) {
    dispatch({type:FAIL})
}
} 
//logout
export const logout =()=>({type:LOGOUT});

//Edit Profil Rec
export const editProfilRec =(Recruteur)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.put('/api/accountRec/updateAccountRec',Recruteur,config)
        console.log(res.data)    
        dispatch(getCurrentRec())
    } catch (error) {
        dispatch({type:FAIL})
    }
    } 

       //Edit Password User
       export const editPasswordRec =( updatedPassRec)=>async(dispatch)=>{
        const config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        try {
            const res = await axios.put('/api/accountRec/updatePasswordRec',updatedPassRec,config)
            console.log(res.data)    
            dispatch(getCurrentRec())
        } catch (error) {
            dispatch({type:FAIL})
            error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));
        }
        } 

          //Delete Account Recruiter
    export const deleteAccountRec =()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.delete('/api/accountRec/deleteAccoutRec',config)           
        dispatch(logout())
        
    } catch (error) {
        dispatch({type:FAIL})
    }
    }
    
    export const rechercheUser =(data)=>async(dispatch)=>{
        const config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        try {
            const res = await axios.get(`/api/accountRec/CVcandidats/${data}`,config)
            console.log(res.data)    
            dispatch({
                type : RECHERCHEUSER ,
                payload : res.data
            })
        } catch (error) {
            dispatch({type:FAIL})
        }
        } 
    