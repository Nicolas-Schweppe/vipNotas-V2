const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');
//inicializacion

const app = express();

//setings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
app.set('view engine', ' .hbs');

//middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
    next();
})

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/notas',require('./routes/notas'));

//publicos
app.use(express.static(path.join(__dirname, ' public')));
// arrancando server
app.listen(app.get('port'),() => {
    console.log('Server en puerto ',app.get('port'));
});