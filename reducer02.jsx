const data={
    list1:[],
    list2:{},
    list3:[],
    list4:'happy new year'
}
export default (state=data,action) => {
    if(action.type=='xxx'){
        const newState = JSON.parse(JSON.stringify(state))//把之前的state拷贝一份
        newState.inputValue = action.inputValue
        return newState
    }
    return state
}