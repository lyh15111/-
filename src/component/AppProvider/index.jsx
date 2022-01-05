import React, {useEffect, createContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
export const context=createContext({});

function Index({children}) {
  const to=useNavigate();
  const [isLogined,setLogined]=useState(false);
useEffect(() => {
    if(isLogined===true){
      to('/');
    }else {
      to('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogined]);
  return (
    <context.Provider value={{isLogined,setLogined}}>
      {children}
    </context.Provider>
  )
}

export default Index
