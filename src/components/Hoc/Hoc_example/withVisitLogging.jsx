import React, { useEffect, useState } from 'react'

export default function WithVisitLogging(WrapperComponent) {
  return function WithVisitLogging(props){
    
    
    useEffect(()=>{
        console.count(`Proyecto ${props.projectTitle} visto`)

    },[props.projectTitle])
    return <WrapperComponent {...props} />
  }
} 
