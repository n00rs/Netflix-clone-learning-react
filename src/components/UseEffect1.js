import React, { useEffect, useState } from 'react'

function UseEffect1() {
    let [state, setState] = useState(0)

    useEffect (() => {

        console.log('coming',);
        console.log('updating', +state);

        return () => {
            console.log('going out',+state);
        }
    },[state])
    return (
        <div>
            <button onClick={() =>setState(state + 1)}>
                Counter
            </button>
            <h1>Counter: {state}</h1>
        </div>
    )
}

export default UseEffect1