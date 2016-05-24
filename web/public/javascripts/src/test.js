import React from 'react';
import ReactDOM from 'react-dom';

var DataEntry = React.createClass({
    render: function(){
        return (
            <h1>Hola mundo </h1>
        );
    }
});

ReactDOM.render(
    <DataEntry />,
    document.getElementById('content')
);
