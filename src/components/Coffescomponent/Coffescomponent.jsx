import React from 'react'

export default function Coffescomponent(props) {
  return (
    <>
    
        	<li className="nav-item">
				<a className={props.class} id={props.id} data-toggle="pill" href={props.href} role="tab" aria-controls="pills-team1" aria-selected={props.aria}><img src={props.imgname} className="img-fluid" alt="" /></a>
			</li>
        

    </>
  )
}
