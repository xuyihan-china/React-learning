//数据都在reducers中
const defaultState ={
    inputValue:'xuYiHan',
    list:[
        'playGames',
        'watchTv',
        'learning'
    ]

}
export default (state=defaultState,action)=>{
    //dispatch 的value 在reducer中拿到
    if(action.type ==='changeInputValue'){
        let newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.inputValue = action.value
        return newState
    }
    if(action.type==='addItem'){
        let newState =JSON.parse(JSON.stringify(state))
        newState.list.unshift(newState.inputValue)
        newState.inputValue = " "
        return newState
    }
    if(action.type==='deleteItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}