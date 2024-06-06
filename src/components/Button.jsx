import React from 'react'

function Button(prop) {
  return (
    <><button className="btn btn-outline btn-info" onClick={prop.click}>{prop.heading}{prop.edit}{prop.remove}</button></>
  )
}

export default Button