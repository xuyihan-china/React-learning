import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import PropTypes from 'prop-types'
import * as serviceWorker from './serviceWorker';
class Son extends React.Component{
    constructor(props){
        super(props)
        this.state={
            newName:'许逸涵',
            text:''
        }
        
    }
    transmit =() =>{
        const {transmit} = this.props
        transmit(this.state.newName)
    }
    handleChange = (e) =>{
        let info = e.target.value
        const {handleChange} = this.props
        this.setState({
            text:info
        })
        console.log(this.state.text)
        handleChange(this.state.text)
    }
    render(){
        return(
            <div>
                <input type="text" onChange ={this.handleChange}></input>        
                <button onClick={this.transmit}>改变为许逸涵</button>
            </div>
        )
    }
}
class Father extends React.Component{
    constructor(props){
        super(props)
        this.props ={
            name:PropTypes.string.isRequired,
            Fatext:PropTypes.number.isRequired
        }
        this.state ={
            name:'fatherName',
            test:'test',
            Fatext:'1111'
        }
        this.setname = this.setname.bind(this)
        this.handle = this.handle.bind(this)
    }
    setname(newName){
        this.setState({
            name:newName,
        })
    }
    handle(Fatext){
        this.setState({
            Fatext:Fatext
        })
    }
    render(){
        const {name,test} =this.state
        return(
            <div>
                <h2>{test}</h2>
                <h2>{name}</h2>
                <h4>{this.state.Fatext}</h4>
                <Son transmit = {this.setname} handleChange={this.handle}/>
            </div>
        )
    }
    
}
ReactDOM.render(<Father/>,document.querySelector('#root'))
serviceWorker.unregister();
//流程 子组件 传递父祖件 
//1. 父组件的props 传入值类型 this.propTypes ={} 
//2. 写一个函数接受子组件的指 如果修改状态那么就setstate  setname(newName)
 // 3.把函数绑定给 子组件 <Son transmit = {this.setname}/>

//1.子组件写一个函数接受父组件的函数  <button onClick={this.transmit}>改变为许逸涵</button>
//2. 接受props 调用自己 传递值
// transmit =() =>{
//     const {transmit} = this.props
//     transmit(this.state.newName)
// }