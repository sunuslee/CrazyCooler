import React from 'react';
import Second from './Second'

class First extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){

        return (
            <div>
                <div>
                    第一个组件
                </div>
                <Second />
            </div>
        );
    }

}

export default First;