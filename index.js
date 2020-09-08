import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
function App (){
    return(
        <div>
            <Banner></Banner>
            <Left></Left>
            <Right></Right>
        </div>
    )
}
class Banner extends React.Component{
    render(){
        return(
            <div class="container">
                <p id="font">请发表对React的评论</p>
            </div>
        )
    }
}
class Left extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
        this.handle = this.handle.bind(this)
    }
    
    render(){
        return(
            <div>
                <div>
                    <h6>用户名</h6>
                    <input type="text" placeholder="name" ref={input =>{this.name = input}} ></input>
                </div>
                    <h6>评论内容</h6>
                    <input type="text" placeholder="content" ref ={input =>{this.comment = input}}></input>
                    <input type="submit" value="提交" onClick={this.handle}></input>
            </div>
        )
    }
    handle(){
        const name = this.refs.name.value
        const comment = this.refs.comment.value
        console.log(name,comment)
    }
}
class Right extends React.Component{
    render(){
        return(
            <div class="right">
                <div>
                    <h3 >评论回复:</h3>
                    <Comments></Comments>
                </div>
            </div>
        )
    }
}
class Comments extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <h2>name</h2>
                <h3>content</h3>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))
serviceWorker.unregister();
