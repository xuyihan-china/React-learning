import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import PropTypes from 'prop-types'
import axios from 'axios'
import * as serviceWorker from './serviceWorker';
class Repo extends React.Component {
    state = {
        RepoName: '',
        RepoUrl: ''
    }
    componentDidMount(){
        const url = `https://api.github.com/search/users?q=r&&sort=star`
        axios.get(url).then(
            (res) =>{
                const result = res.data
                console.log(result)
                const {name,html_url} = result.items[0]
                this.setState({RepoName:name,RepoUrl:html_url})
            }
        )
    }
    render() {
        const { RepoName, RepoUrl } = this.state
        //应该是表达式 不可以在render中
        if (!RepoName) {
            return <h2>Loading</h2>
        } else {
            return <h2><a href={RepoUrl}>the most repo is {RepoName}</a></h2>
        }
    }
}
ReactDOM.render(<Repo />, document.getElementById('root'))
serviceWorker.unregister();
