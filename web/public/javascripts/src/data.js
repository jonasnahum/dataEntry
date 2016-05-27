module.exports = {
    pages: [{
        title: "Page 1",
        steps: [{
            title: "Seleccione Operacion",
            fields: [{
                label: 'Seleccione tipo de operacion',
                type: 'Text'                
            }]
        }]
    }, {
        title: 'Page 2',
        steps: [{
            title: "Escriba Dos Numeros",
            fields: [{
                label: 'Numero A',
                type: 'Text'                
            },{
                label: 'Numero B',
                type: 'Text'                
            }]
        }]
    }, {
        title: 'Resultado',
        steps: [{
            title: "El resultado es",
            fields: [{
                label: 'Numero A',
                type: 'label'
            }]
        }]
    }]    
}
/*

module.exports = React.createClass({
    render: function(){
        return (
            <div>
                 {this.props.obj.title}  
            </div>
        );
    }
});
       
*/