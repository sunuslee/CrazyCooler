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
                    <h1>第一个组件</h1>
                    <button type="button" className="btn btn-success">Success</button>
                </div>
                <Second />
            </div>
        );
    }

}

export default First;
