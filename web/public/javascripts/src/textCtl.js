import React from 'react';
import ReactDOM from 'react-dom';


    
var Text = React.createClass({
    render: function() {
        return (
            <label>{this.props.label}</label>
            <input
                type="text"
                value={this.state.value }                
            />
        );
    }
});

var Step = React.createClass({
     getInitialState: function() {
        return {            
          title: "Seleccione Operacion",
            fields: [{
                label: 'Seleccione tipo de operacion',
                type: 'Text'                
            }]
        }
    },
    render: function() {
        return (
            
            <label>{this.props.label}</label>            
            
            <{this.state.type} />                       
            
            <Text />       
        );
    }
});


    