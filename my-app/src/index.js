import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state={username:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({username:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        let pwd = this.pwd.value
        alert(`name:${this.state.username} password : ${this.pwd.value}`)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    用户<input type="text"  onChange={this.handleChange} value={this.state.username}></input>
                    密码<input type="password" ref={(input) => this.pwd = input}></input>
                    <input type="submit" value="提交"></input>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<LoginForm />,document.getElementById('root'))
serviceWorker.unregister();
