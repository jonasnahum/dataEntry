
import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({    
    render: function() {
        if (this.props.pI === 0)
            return (
                <div>
                    <input type="button" className="btn" value="Next" onClick={this.props.handleNextClick} />
                </div>
            );
        if ((this.props.pagesArrLength-1) === this.props.pI)
            return (
                <div>
                    <input type="button" className="btn" value="Back" onClick={this.props.handleBackClick} />
                </div>
            );


        return (
            <div>
                <input type="button" className="btn" value="Back" onClick={this.props.handleBackClick} />
                <input type="button" className="btn" value="Next" onClick={this.props.handleNextClick} />
            </div>
        );
    }
});