import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
/* app 是普通的js对象 */
// let hh= <h1>make the better
// </h1>
// ReactDOM.render(
//     hh,
//   document.getElementById('root')
// );
//实现时刻显示时间

// function clock(){
//   let root = document.querySelector('#root')
//   let time = new Date().toString() //当前时间
//   let element = (
//   <div>
//     <h1>the time right now is {time}</h1>
//     <div>canvas</div>
//   </div>
//   )
//   ReactDOM.render(element,root)
// }
// setInterval(clock,1000)
// let root = document.querySelector('#root')


// function Clock(insertNum) {
//   return (
//     <div>

//       <div>the time right now is {insertNum.date}</div>
//     </div>
//   )
// }
// function run() {
//   ReactDOM.render(<Clock date={new Date().toString()} />, root)
// }
// setInterval(run, 1000)
// let crg = 'csg'
// let fsb = 'fjd'
// let element = {
//   backgroundColor:'black',
//   color:'red'
// }
// function Cat() {
//   return (
//     <div>
//       <span>showcase</span>
//       <h2 className={crg + ' red'}>name xyh</h2>
//       <div>{1 + 1}</div>
//       <div style = {element}>{fsb+crg}</div>
//     </div>
//   )
// }
// function Dog() {
//   return (
//     <div>
//       <span className={crg}>This should be red</span>
//     </div>
//   )
// }
//ReactDOM.render(<Cat />, document.querySelector('#root'))

//写一个类组件

// function Cat() {
//   return (
//     <div>
//       <div>haode</div>
//       <h2>woyaog</h2>
//     </div>
//   )
// }

// class Dog extends React.Component {
//   render() {
//     return (
//       <div>
//         hello world
//         <Cat/>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Dog />, document.querySelector('#root'))

/* clock 继承  */

//let time = new Date().toString() //当前时间
// class Clock extends React.Component{
//   constructor(props){
//     super(props)
//     this.state ={
//       time: new Date().toString()
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h2>{this.state.time}</h2>
//       </div>
//     )

//   }
//生命周期函数 在组件渲染完成的时候调用
//   componentDidMount(){
//     setInterval(()=>{
//         this.setState({
//           time:new Date().toString()
//         })
//     },1000)
//   }
// }
//一种传递值的方式是在组件内部

// class Tab extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       isActive:"",
//       strClass:""
//     }
//   }
//   clickEvent(){
//     console.log('clickEvent')
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.clickEvent}>content1</button>
//         <button>content2</button>
//         <div className="content">
//           <h1>content1</h1>
//         </div>
//         <div className="content">
//           <h1>content2</h1>
//         </div>
//       </div>
//     )
//   }
// }
//  ReactDOM.render(<Tab/>,document.querySelector('#root'))

class Like extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab1: "i like you",
      tab2: "you like me"
    }
    this.cab = this.cab.bind(this)
  }
  cab(){
    console.log('click')
    const tab2 = this.state.tab2
    this.setState({tab2})
  }
  render() {
    const tab1 = this.state.tab1
    const tab2 = this.state.tab2
    return (
      <div>
        <div onClick={this.cab}>{tab1}</div>
        <div >{tab2}</div>
      </div>
    )
  }
  
  
}

ReactDOM.render(<Like />, document.querySelector('#root'))
serviceWorker.unregister();
