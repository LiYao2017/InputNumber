import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './confirm.css';
class Confirm extends React.Component{
    constructor(props){
        super(props);
        this.hideConfirm = this.hideConfirm.bind(this)
    }
    hideConfirm(div){
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    }
    render(){
        let { title, promiseStatus,div} = this.props;
        return (
            <div className="confirm">
                <div className="confirmConent">
                    <h2 className="confirmTitle">确定提示</h2>
                    <div className="confirmBody">{title}</div>
                    <div className="confirmFoot">
                        <button onClick={(e)=>{
                            promiseStatus.resolve(false);
                            this.hideConfirm(div)
                        }}>取消</button>
                        <button onClick={(e)=>{
                            promiseStatus.resolve(true);
                            this.hideConfirm(div)
                        }}>确认</button>
                    </div>
                </div>
            </div>
        )
    }
}

const confirm = function(options){
    return new Promise((resolve, reject)=>{
        let title = options || '确定要删除吗？';
        let promiseStatus = {resolve, reject}
        let div = document.createElement('div');
        document.body.appendChild(div);
        let props = {
            title:title,
            promiseStatus : promiseStatus,
            div:div
        }
        let notification = ReactDOM.render(React.createElement(Confirm, props), div);
     });
}

export default confirm