import React from 'react';

class InputNumber extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
                <input {...this.props} type="text"/>
        )
    }
}

export default InputNumber