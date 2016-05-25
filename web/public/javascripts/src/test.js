import React from 'react';
import ReactDOM from 'react-dom';

var Header = require("./header");
var Menu = require("./menu");
var Screen = require("./screen");
var Controlls = require("./controlls");
var Footer = require("./footer");

var steps =  [
  {name: "Seleccione una opción"},
  {name: "Entre dos números"},    
  {name: "Mostrar resultado"}    
];
var head =  {title: "Data Entry"};
 


var DataEntry = React.createClass({
    getTitle : function(){
        return {title:"Data Entry"}
    },
    render: function(){
        return (
            <div>
                <Header head = {this.props.title} />
                <Menu steps = {this.props.steps} />
                <Screen />
                <Controlls />
                <Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <DataEntry steps={steps} title={head} />,
    document.getElementById('content')
);
