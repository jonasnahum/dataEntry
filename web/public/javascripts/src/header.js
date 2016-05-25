import React from 'react';
import ReactDOM from 'react-dom';
var Header  = require('./header.js');

module.exports = React.createClass({
    render: function(){
        return (
            <div>
                {this.props.head.title} 
            </div>
        );
    }
});