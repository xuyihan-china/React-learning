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
let crg = 'csg'
let fsb = 'fjd'
let element = {
  backgroundColor:'black',
  color:'red'
}
function Cat() {
  return (
    <div>
      <span>showcase</span>
      <h2 className={crg + ' red'}>name xyh</h2>
      <div>{1 + 1}</div>
      <div style = {element}>{fsb+crg}</div>
    </div>
  )
}
// function Dog() {
//   return (
//     <div>
//       <span className={crg}>This should be red</span>
//     </div>
//   )
// }
ReactDOM.render(<Cat />, document.querySelector('#root'))

serviceWorker.unregister();
