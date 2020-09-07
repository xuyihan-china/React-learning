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

// class Like extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       tab1: "i like you",
//       tab2: "you like me"
//     }
//     this.cab = this.cab.bind(this)
//   }
//   cab(){
//     console.log('click')
//     const tab2 = this.state.tab2
//     this.setState({tab2})
//   }
//   render() {
//     const tab1 = this.state.tab1
//     const tab2 = this.state.tab2
//     return (
//       <div>
//         <div onClick={this.cab}>{tab1}</div>
//         <div >{tab2}</div>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Like />, document.querySelector('#root'))
// function Node(){
//   return(
//     <div>
//       <h2>amb</h2>
//     </div>
//   )
// }
//let styles={

//}
// class Like extends React.Component{
//     constructor(props){
//       super(props)
//       this.state={
//          isLikeMe:false,
//          isLikeYou:true,
//          param:"fancy"
//       }
//       this.changeData= this.changeData.bind(this)
//     }
//     render(){
//       //解构赋值 接受参数
//       const {isLikeMe}= this.state
//       const {isLikeYou} = this.state
//       const {fancy} = this.state
//       return(
//       <div>
//         <h2 onClick={this.changeData}>{isLikeMe?"love you":"like me"}</h2>
//         <h3>{isLikeYou?"may":"august"}</h3>
//         <h3>{fancy}</h3>
//       </div>
//       )
//     }
//     changeData(){
//       const isLikeMe =!this.state.isLikeMe
//       this.setState({isLikeMe})
//     }
// }
// ReactDOM.render(<Like/>,document.querySelector('#root'))
// class DisLike extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       isLikeMe:false
//     }
//     this.click = this.click.bind(this)
//   }
//   render(){
//     const isLikeMe = this.state.isLikeMe
//     return(
//       <div>
//         <h2 onClick={this.click}>{isLikeMe?"hello":"else"}</h2>
//       </div>
//     )
//   }
//   click(){
//     const isLikeMe = !this.state.isLikeMe
//     this.setState({isLikeMe})
//   }
// }
// ReactDOM.render(<DisLike/>,document.querySelector('#root'))

//props 还有数据类型的限制
// function Person(props) {
//   return (
//     <ul>
//       <li>年龄:{props.age}</li>
//       <li>性别:{props.sex}</li>
//       <li>姓名:{props.name}</li>
//     </ul>
//   )
// }
// const personOne = {
//   name:"xyh",
//   age:"20",
//   gender:"male"
// }
//组件开头大写
//ReactDOM.render(<Person name= {personOne.name} age={personOne.age} gender={personOne.gender}/>,document.querySelector('#root'))

//自学
// ReactDOM.render(<h1>hello world</h1>,document.getElementById('root')
// )



// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             ToDos: ['查查', '59', 'T34']
//         }
//         //子组件不可以直接改变父组件的state 
//         this.AddToDo = this.AddToDo.bind(this)
//     }
//     AddToDo(todo){
//         this.state.ToDos.unshift(todo)
//         this.setState({ToDos})
//     }
//     render() {
//         return (
//             <div>
//                 <h1>To Do The List</h1>
//                 <Add count={this.state.ToDos.length} AddToDo={this.AddToDo}/>
//                 <List ToDos={this.state.ToDos} />
//             </div>
//         )
//     }
    
// }
// class Add extends React.Component {
//     constructor(props){
//         super(props)
//         this.add =this.add.bind(this)
//     }
//     add(){
//         const todo= this.refs.input.value
//         this.props.AddToDo(todo)
//     }   
//     render() {
//         return (
//             <div>
//                 ADD  <input type="text" ref={input =>{this.input = input}}></input>
//                 <button onClick={this.add}>submit 第 {this.props.count +1} 个</button>
//             </div>
//         )
//     }
// }
// class List extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.props.ToDos.map((item, index) => {
//                             return (<li>第{index + 1}个元素是{item}</li>)
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<App />, document.getElementById('root'))

//收集表单数据
// class Form extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             pwd:''
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.change = this.change.bind(this)
//     }
//     handleSubmit(event){
//         console.log('jfk')        
//         const zzInput = this.refs.zzInput.value
//         const pwd = this.state.pwd
//         alert(`用户名 ${zzInput} , 密码 ${pwd}`)
//         event.preventDefault()
//     }
//     change(e){
//        const pwd = e.target.value
//        this.setState({pwd})
//     }
//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     账号<input type="text" ref={input =>this.zhInput = input} ></input>
//                     密码<input type="passWord" ref={input =>this.mmInput = input} onChange={this.change}></input> 
//                     <input type="submit" value="登录"></input>
//                 </form>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Form/>,document.querySelector('#root'))

serviceWorker.unregister();
