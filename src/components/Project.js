import React from 'react'

export default function Project (props) {
  return (
    <div className='projectBox'>
        <h3><a href={props.link}> {props.title}</a></h3>
        <img className="projectPicture" src={props.pic} alt={props.alt} />
        <p>{props.details}</p>
    </div>
  )
}
