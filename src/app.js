const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;

//routes
const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productRouter');

//Ruta elementos estaticos
app.use(express.static(path.join(__dirname, '../public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter)

// catch 404 and forward to error handler
 /*app.use(function(req, res, next) {
    next(createError(404));
 });*/

app.listen(process.env.PORT || PORT, () => console.log(`http://localhost:${PORT}`))
