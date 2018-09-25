import React from 'react';

export default class TcEvent extends React.component {

    render() {
        return <div tc-event={this.props.tcEvent}></div>
    };
}