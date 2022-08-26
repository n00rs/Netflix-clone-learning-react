
 import { useState } from "react";
 import "./app.css";
import { Added, Test3 } from "./components/Test3";

import Test3Data from "./components/Test3Data";
 
 export default function App() {
  

 // let districts = ['trivandrum', 'kollam','kochi','thrissur','palakkad','malappuram']
 // let result = districts.map(distrct =>  (<li>`${distrct} is cool`</li>) )

//  let text =""

let [added,setAdded] = useState([])

let getAdded = (id)=>{
  // console.log('from App',id); 
  setAdded([...added, id])
}

let removeAdded = (id)=>{
  console.log("inside remove",id);
  setAdded([...added].filter((added)=> (added.id !== id)))
}
 return (
   <div >
     {
   Test3Data.map(person => (<Test3 {...person} getAdded = {getAdded} /> ))  
  }
   
  <Added id={added} removeAdded={removeAdded}/>
   </div>
 );
}



// import './app.css';
// // import Hello from './components/test'
// // const name = "noorsha"
// import { useState } from 'react'
// // import Adder from './components/Adder';
// // import Test1 from './components/Test1';
// // import Test2 from './components/Test2';
// import UseEffect1 from './components/UseEffect1';



// function App() {
//   const [toggle,setToggle]=useState(false)
//   return (
// <div>
//   <h1 onClick={()=>(setToggle(!toggle))}> SHOW/HIDE</h1>
//   {toggle ? <UseEffect1 /> : ""}
  
// </div>
//     );
//   }
//   export default App;




  // const [count, setCount] = useState(0)
  // // let number = 0;
  // const [toggle, setToggle] = useState(false)
  // let counter = () => setCount(count + 1)

  // let toggler = () => setToggle((prv) => !prv)



  // let test2 = [{
  //   name: "abc", age: 22, count
  // },
  // { name: "asd", age: 44, count },
  // {
  //   count, name: "qwe", age: 33
  // }]

 


/*<div>
<h1 className={toggle ? "show" : ""}>hello</h1>
<button onClick={counter}>
  ADD
</button>
<button onClick={toggler}>TOGGLE</button>
{
  test2.map((obj, i) => <Adder key={i} {...obj} />)
}

<Test1 toggle={toggler} />
<Test2 toggle={toggle} />
{ <Adder {...test}/>
<Adder title= '2nd counter' count={count} place={test.place}/> }

</div>*/
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

// <div>

//   <h1 className='headerBackground' >hello World</h1>

//   <Header />
//   <Hello data ={name} />
//   <p>hi iam testing {name}</p>
// </div>





// function Header(props) {
  // return <p style={{ background: '#000', color: '#fff' }}>i am ground function and sitting above {props.data}</p>
// }