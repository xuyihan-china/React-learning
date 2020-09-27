import React, { Component } from 'react';
//imrc
//ccc 快捷键
import axios from 'axios'
import store from './store/index'
import TodoUI from './TodoUI'
class todo extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.clickBtn = this.clickBtn.bind(this)
        this.changeInputValue= this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount(){
        axios.get('http://easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            const action ={
                type:'getData',
                value:data
            }
            store.dispatch(action)
        })
    }
    render() {
        return (
           <TodoUI 
            inputValue={this.state.inputValue}
            //onchange 函数
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            list ={this.state.list}
            dataSource ={this.state.list}
            deleteItem= {this.deleteItem}
           />
        );
    }
    changeInputValue(e){
        console.log('hasChanged')
        //这里进行数据的改变 然后修改redux的值
        //想改变Redux里边State的值就要创建Action了。Action就是一个对象，这个对象一般有两个属性，第一个是对Action的描述，第二个是要改变的值
        const action ={
            type:'changeInputValue',
            value:e.target.value
        }
        store.dispatch(action)
    }
    
    clickBtn(){
        const action ={
            type:'addItem'
        }
        store.dispatch(action)
    }
    deleteItem(index){
        const action={
            type:'deleteItem',
            index
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}

export default todo;