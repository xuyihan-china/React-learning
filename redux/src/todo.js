import React, { Component } from 'react';
//imrc
//ccc 快捷键
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store/index'

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
    
    render() {
        return (
            <div>
                <div>
                    <Input
                     placeholder={this.state.inputValue}
                     style={{width:'250px',marginRight:'10px'}}
                     onChange={this.changeInputValue}
                     ></Input>
                    <Button 
                        type="primary"
                        onClick={this.clickBtn}
                    >哈哈</Button>
                </div>
                <div style={{width:'300px',margin:'10px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index) =>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    ></List>
                </div>
            </div>
        );
    }
    changeInputValue(e){
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