import React from 'react'
import { useParams } from 'react-router-dom'

function Description(props) {
   const id=useParams() ;
   console.log(id)

   const item=props.movies[id.id]
  return (
    <div>
      {item.desc}
    </div>
  )
}

export default Description
