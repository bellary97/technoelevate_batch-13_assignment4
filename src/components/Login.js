import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import LoginContext from '../context/LoginContext'

export default function Login() {
   const context=useContext(LoginContext)
   const history=useHistory()
   function submit(event){
       event.preventDefault()
       context.sign()
       history.push('/home')
   }      
  
    return (
        <div>
           <button type="button" className="btn btn-success mt-2" onClick={(event)=>{submit(event)}}>Login</button>
        </div>
    )
}