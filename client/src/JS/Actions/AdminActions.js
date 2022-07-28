import axios from "axios"
import {GET_MESSAGES, GET_OFFERS, GET_RECS, GET_USERS } from '../actionTypes'


export const getListUsers=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
                }
    }
    try {
        const res=await axios.get("/api/admin/allUsers",config)
        dispatch({type:GET_USERS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteOneUser=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
                }
    }
    try {
        await axios.delete(`/api/admin/deleteUser/${id}`,config)
        dispatch(getListUsers())
    } catch (error) {
        console.log(error)
    }
}

export const getListRecs=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
                }
    }
    try {
        const res=await axios.get("/api/admin/allRecruteurs",config)
        dispatch({type:GET_RECS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteOneRec=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
                }
    }
    try {
        await axios.delete(`/api/admin/deleteRecruteur/${id}`,config)
        dispatch(getListRecs())
    } catch (error) {
        console.log(error)
    }
}

export const getListMsgs=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
                }
    }
    try {
        const res=await axios.get("/api/admin/allMessages",config)
        dispatch({type:GET_MESSAGES,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteMsgContact=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
                }
    }
    try {
        await axios.delete(`/api/admin/deleteMessage/${id}`,config)
        dispatch(getListMsgs())
    } catch (error) {
        console.log(error)
    }
}

export const getListOffers=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
                }
    }
    try {
        const res=await axios.get("/api/admin/allJobs",config)
        dispatch({type:GET_OFFERS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteOneOffer=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
                }
    }
    try {
        await axios.delete(`/api/admin/deleteOffre/${id}`,config)
        dispatch(getListOffers())
    } catch (error) {
        console.log(error)
    }
}
