import React from 'react';
import ReactDOM from 'react-dom';

//Archivos
var Header = require("./header");
var Menu = require("./menu");
var Page1 = require("./Page1");
var Page1Step2 = require("./Page1Step2");
var Page2Step2 = require("./Page2Step2");
var Page3Step2 = require("./Page3Step2");
var Page2 = require("./Page2");
var Page3 = require("./Page3");
var Navigation = require("./navigation");
var Footer = require("./footer");

//variables
var data =  require("./data");
var arr = data.pages;
console.log(arr);

var head =  {title: "Data Entry"};
var obj =  {title: "Fotter del dataentry"};

var pagesArr = [Page1,Page2,Page3]

var Pages = React.createClass({    
    render: function() {
        if (this.props.pageIndex === 0 && this.props.stepIndex === 0)
        return (
            <Page1 handleOperation={this.props.handleOperation} op={this.props.op}/>
        );
        
        if (this.props.pageIndex === 0 && this.props.stepIndex === 1)
        return (
            <Page1Step2/>
        );
                  
        if (this.props.pageIndex === 1 && this.props.stepIndex === 1)
        return (
            <Page2Step2/>
        );
          
        if (this.props.pageIndex === 2 && this.props.stepIndex === 1)
        return (
            <Page3Step2/>
        );
            
        if (this.props.pageIndex === 1 && this.props.stepIndex === 0)
        return (
            <Page2 num1={this.props.num1} num2={this.props.num2} handleNum1={this.props.handleNum1} handleNum2={this.props.handleNum2}/>
        );
        
        if (this.props.pageIndex === 2 && this.props.stepIndex === 0)
        return (
            <Page3 op={this.props.op} num1={this.props.num1} num2={this.props.num2}/>
        );
            
        return (
            null
        );
    }
});


var DataEntry = React.createClass({
    getInitialState: function() {
        return {
          pageIndex: 0,
          stepIndex: 0,
          operation: "suma",
          num1: 0,
          num2: 0,
          pagesArrLength: this.props.pagesArr.length
        }
    },
    getTitle : function(){
        return {title:"Data Entry"}
    },
    handleNextClick: function (e) {
        this.setState({
          pageIndex: this.state.pageIndex + 1,
          stepIndex: this.state.stepIndex
        });    
    },
    handleBackClick: function (e) {
        if(this.state.pageIndex === 0 && this.state.stepIndex > 0){
            this.setState({
              pageIndex: this.state.pagesArrLength -1,
              stepIndex: this.state.stepIndex -1,
            });
            return;
        }
        this.setState({
          pageIndex: this.state.pageIndex - 1,
          stepIndex: this.state.stepIndex
        });
    },
    handleNextStep: function (e) {
        this.setState({
          stepIndex: this.state.stepIndex + 1,
          pageIndex: 0
        });
    },
    handleOperation: function (e) {
        this.setState({operation:e.target.value});
    },
    handleNum1: function (e) {
        this.setState({num1:e.target.value});
    },
    handleNum2: function (e) {
        this.setState({num2:e.target.value});
    },
    render: function() {
        return (
            <div>
                <Header head = {this.props.title} />
                <Menu pages = {this.props.pages} />
                <Pages 
                    pageIndex={this.state.pageIndex} 
                    stepIndex={this.state.stepIndex} 
                    handleOperation={this.handleOperation} 
                    op={this.state.operation}
                    num1={this.state.num1}
                    num2={this.state.num2}
                    handleNum1={this.handleNum1}
                    handleNum2={this.handleNum2}
                />
                <Navigation 
                    handleNextClick={this.handleNextClick}  
                    handleBackClick={this.handleBackClick}
                    handleNextStep={this.handleNextStep}
                    pI={this.state.pageIndex}
                    pagesArrLength={this.state.pagesArrLength}
                />
                <Footer obj = {this.props.obj}/>
            </div>
        );
    }
});

ReactDOM.render(
    <DataEntry pages={arr} pagesArr={pagesArr} title={head} obj={obj} />,
    document.getElementById('content')
);
