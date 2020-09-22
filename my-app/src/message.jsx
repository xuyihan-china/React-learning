import { func } from 'prop-types'
import react from 'react'
const messageDetail = [
    {id: 1, title: 'Message001', content: '我爱你, 中国'},
    {id: 3, title: 'Message003', content: '我爱你, 老婆'},
    {id: 6, title: 'Message006', content: '我爱你, 孩子'},
  ]
export default function messageDetail(props){
    const id = props.match.params.id
    //md 就相当于取出来的一个对象
    const md = messageDetail.find()
    //路由链接 跳转 a标签 发送请求  不跳转的路由 不发请求
}  