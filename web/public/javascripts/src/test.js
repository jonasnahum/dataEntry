import React from 'react';
import ReactDOM from 'react-dom';

//Archivos
var Header = require("./header");
var Menu = require("./menu");
var Screen = require("./screen");
var Controlls = require("./controlls");
var Footer = require("./footer");

//variables
var steps =  [
  {name: "Seleccione una opción"},
  {name: "Entre dos números"},    
  {name: "Mostrar resultado"}    
];
var head =  {title: "Data Entry"};
var obj =  {title: "Fotter del dataentry"};
 


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
                <Footer obj = {this.props.obj}/>
            </div>
        );
    }
});

ReactDOM.render(
    <DataEntry steps={steps} title={head} obj={obj} />,
    document.getElementById('content')
);
