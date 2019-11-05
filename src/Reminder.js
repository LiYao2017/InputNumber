import React from 'react';
import confirm from './confirm/confirm.js'
class Reminder extends React.Component{
    constructor(props){
        super(props);
    }
    async componentDidMount(){
        let res = await confirm("确定删除吗")
        console.log(res);
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }
    render(){
        return (
            <div>
                我就是一个打酱油的东西主要用来演示 confirm
            </div>
        )
    }
}
export default Reminder