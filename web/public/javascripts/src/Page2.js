import React from 'react';
import ReactDOM from 'react-dom';
    
module.exports = React.createClass({
    render: function() {
        return (
            <div>
                Seleccione Operacion
                
                    Numero 1 <input
                                type="number"
                                value={this.props.num1}
                                onChange={this.props.handleNum1}
                             />
                    Numero 2 <input
                                type="number"
                                value={this.props.num2}
                                onChange={this.props.handleNum2}
                             />

            </div>
        );
    }
})
    
    
    
    