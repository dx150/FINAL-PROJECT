import axios from 'axios'
import {  FAIL, FIND_JOB, GET_JOBS, MY_JOBS } from '../actionTypes'
import { setAlert } from './alertActions'

export const getJobs=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/api/allJobs/jobs")
        dispatch({type:GET_JOBS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const myJobs=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        const res=await axios.get("/api/accountRec/myJobs",config)
        dispatch({type:MY_JOBS,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

export const addJobs=(newJob)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        await axios.post("/api/accountRec/addJob",newJob,config)
        dispatch(myJobs())
        
    } catch (error) {
        error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));
    }
}

export const EditJobs=(id,updatedJob)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        await axios.put(`/api/accountRec/updateJob/${id}`,updatedJob,config)
        dispatch(myJobs())
        
    } catch (error) {
        console.log(error)
    }
}

export const DeleteJob=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        await axios.delete(`/api/accountRec/deleteJob/${id}`,config)
        
        dispatch(myJobs())
        
    } catch (error) {
        console.log(error)
    }
}

export const FindJobs=(data)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        const res =await axios.get(`/api/accountUser/FindJobs/${data}`,config)
        console.log(res.data)    
            dispatch({
                type : FIND_JOB ,
                payload : res.data
            })
        
    } catch (error) {
        dispatch({type:FAIL})
       
    }
}