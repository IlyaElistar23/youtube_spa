import React from "react"
import { Navigate } from "react-router-dom"
import { PropsType } from "../HomePage/SearchPage";

const checkAuth = (Component: React.ComponentType<PropsType>) => {
    return (props: PropsType) => {
        if (localStorage.getItem('token')) {
            return (<Component {...props as PropsType}/>)
        } else {
            return (<Navigate to='/' replace />)
        }
    }
}

export default checkAuth
