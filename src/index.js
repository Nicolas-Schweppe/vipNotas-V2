const { application } = require('express');
const express = require('express');
const morgan = require('morgan');
//inicializacion

const app = express();

//setings

app.set('port',process.env.PORT || 4000);

//middlewares 
app.use(morgan('dev'));

//variables globales


//rutas
app.use(require('./routes'));
//publicos

// arrancando server
app.listen(app.get('port'),() => {
    console.log('Server en puerto ',app.get('port'));
});