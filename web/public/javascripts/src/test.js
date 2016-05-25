import React from 'react';
import ReactDOM from 'react-dom';
var Header = require("./header");
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
/*
var Header = React.createClass({
    render: function(){
        return (
            <div>
            {this.props.head.title} 
            </div>
        );
    }
});
*/
var Menu = React.createClass({
  render: function() {
    var stepNodes = this.props.steps.map(function(step) {
      return (
          step.name
      );
    });
    return (
      <div>
        {stepNodes}
      </div>
    );
  }
});

var Screen = React.createClass({
    render: function(){
        return (
            <div>
                screen
            </div>
        );
    }
});

var Controlls = React.createClass({
    render: function(){
        return (
            <div>
                controls 
            </div>
        );
    }
});

var Footer = React.createClass({
    render: function(){
        return (
            <div>
                footer 
            </div>
        );
    }
});

ReactDOM.render(
    <DataEntry steps={steps} title={head} />,
    document.getElementById('content')
);
