import React from 'react'

function Adder(props) {
    // console.log(props);
  return (
    <div>

        <h1>{props.name} , {props.age} {props.count} </h1> 

    </div>
  )
}

export default Adder