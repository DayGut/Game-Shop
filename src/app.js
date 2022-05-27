const express = require('express');
const path = require('path')
const app = express();
const process = require('process');
require('dotenv').config();
const PORT = 3001;
const methodOverride = require('method-override');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const cookieSession = require('./middlewares/cookieSession');

//routes
const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productRouter');
const adminRouter = require('./routes/adminRouter')

//Ruta elementos estaticos
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));//habilita el acceso a put y delete

/*session*/
app.use(session({
    secret:"game-shop",
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(cookieParser());
app.use(cookieSession);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware de rutas
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);


app.listen(process.env.PORT || PORT, () => console.log(`http://localhost:${PORT}`))
