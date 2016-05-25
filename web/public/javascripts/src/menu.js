/*
import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
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
*/
/*
import React from 'react';
import ReactDOM from 'react-dom';

var Board = React.createClass({
  render: function() {
    return (
      <div >
        {this.props.step.name}
      </div>
    );
  }
});
*/
import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
    getInitialState: function() {
        return {
          selectedStep: 1
        }
    },
    onNextPage: function(evt) {
        this.setState({
          selectedStep: this.state.selectedStep + 1
        })
    },
    
    render : function (){
        return (
            <div>
                <div> your selected step is + {this.state.selectedStep} </div>
                <button onClick={this.onNextStep}>Next Step</button>
            </div>
        );
    }
});
