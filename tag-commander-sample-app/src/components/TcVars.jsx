import React from 'react';
import TC_Wrapper from 'react-tag-commander';

export default class TcVars extends React.Component {

    constructor(props) {
        super(props);
        this.wrapper = TC_Wrapper.getInstance();
    }

    componentDidMount() {
        
        // setTimeout(() => {
            console.log(window.tc_vars)
            this.wrapper.setTcVars(this.props);
            // this.wrapper.
        // }, 1000);
    }

    render() {
        return null;
    };
}