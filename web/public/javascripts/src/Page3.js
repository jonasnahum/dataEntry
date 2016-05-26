import React from 'react';
import ReactDOM from 'react-dom';
    
module.exports = React.createClass({

    render: function() {
        var num1 = this.props.num1;
        var num2 = this.props.num2;
        if (this.props.op === "suma")
            return (
                <div>
                    El resultado de la operación es: {parseInt(num1) + parseInt(num2)}
                </div>
            );
        if (this.props.op === "resta")
            return (
                <div>
                    El resultado de la operación es: {parseInt(num1) - parseInt(num2)}
                </div>
            );
        return (
            null
        );
    
    }
})
    
    
    
    