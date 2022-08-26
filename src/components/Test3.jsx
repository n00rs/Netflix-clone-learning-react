import React, { useState } from 'react'

 function Test3(props) {
// console.log(props);
    let [add, setAdded] = useState('add')

    let addToSet =(params)=>{
        // setAdded((prev)=> prev === 'add' ? 'added' : 'add')
        setAdded((prev)=> {
            if(prev === 'add'){

                props.getAdded(params)
                return 'added'
            }else{
                return 'add'
            }
        })
        
    }
    return (
        <div>

            <h1>
                <button className={add === 'added' ? 'btn': ''}
                
                onClick={()=>addToSet(props.id)}
                >
                  {add === 'added' ? 'ADDED': "ADD"}
                </button>
                {props.name}
                {/* {props.id} */}

            </h1>
        </div>
    )
}

function Added(props) {

    // console.log(`from added `,props);
    return(
        <h1>
            <button onClick={()=>props.removeAdded(props.id)}>
removeAdded
            </button>
            Added To Set {props.id}
        </h1>
    )
}

export { Test3, Added}
    // export default Added
