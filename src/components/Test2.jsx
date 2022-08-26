import React from 'react'

function Test2(props) {
  return (
    <div>
         {props.toggle ? <h1>from test2</h1>: ""}
         </div>
  )
}

export default Test2