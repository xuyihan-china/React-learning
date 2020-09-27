import React from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
/// 纯视图层 的 UI 是无状态组件就是函数组件
const TodoUI =(props)=> {
        return ( 
            <div>
            <div>
                <Input
                 placeholder={props.inputValue}
                 style={{width:'250px',marginRight:'10px'}}
                 onChange={props.changeInputValue}
                 ></Input>
                <Button 
                    type="primary"
                    onClick={props.clickBtn}
                >哈哈</Button>
            </div>
            <div style={{width:'300px',margin:'10px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) =>(<List.Item onClick={()=>{this.deleteItem(index)}}>{item}</List.Item>)}
                ></List>
            </div>
        </div>
         );
    }

 
export default TodoUI;