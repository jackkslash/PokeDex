import React from 'react'
import { useLocation } from 'react-router-dom'



export const Details = (LinkProps: any) => {

const location = useLocation();
const pokemon = location.state;
console.log(pokemon)

  return (
    <><div>details {pokemon}</div></>
    
  )
}
