import { Component } from "react"
// exports.module = {
//    let  Hello = (props)=> {
//         return (<p> calling from components {props.data} </p>)
//     }
    class Hello extends Component{
        render(){
            return <p style={{background:'orange'}}>class {this.props.data}</p>
        }
    }

export default Hello