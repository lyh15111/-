import React, { useContext } from 'react'
import {context} from '../AppProvider'
import {Navigate} from 'react-router-dom'

function Index({children}) {
  const {isLogined}=useContext(context);
  if(isLogined){
    return children
  }
  return <Navigate to='/login' replace={true} />
}



export default Index
