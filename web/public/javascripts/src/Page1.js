import React from 'react';
import ReactDOM from 'react-dom';


    
module.exports = React.createClass({
    render: function() {
        return (
            <input
                type="text"
                value={this.props.op}
                onChange={this.props.handleOperation}
            />
        );
    }
})    
    