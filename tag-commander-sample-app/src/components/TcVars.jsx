import React from 'react';
import TC_Wrapper from 'react-tag-commander';

export default class TcVars extends React.Component {

    constructor(props) {
        super(props);
        this.wrapper = TC_Wrapper.getInstance();
    }

    componentDidMount() {
        this.wrapper.setTcVars(this.props);
    }

    render() {
        return null;
    };
}