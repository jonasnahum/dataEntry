
import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({    
    render: function() {
        return (
            <div>
                <input type="button" className="btn" value="Back" onClick={this.props.handleBackClick} />
                <input type="button" className="btn" value="Next" onClick={this.props.handleNextClick} />
            </div>
        );
    }
});