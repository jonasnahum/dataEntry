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