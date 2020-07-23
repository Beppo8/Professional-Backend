const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

const tasksRoutes = require('./routes/tasks_routes');
const sessionsRoutes = require('./routes/sessions_routes');
const registrationsRoutes = require('./routes/registrations_routes');

const findUserMiddleware = require('./middlewares/find_user');
const authUser = require('./middlewares/auth_user');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

app.use(session({
    secret:['123iojsdf34gdfgd','34kjkh5kj43h5kj43sdfsd'],
    saveUninitialized: false,
    resave: false
}));

app.use(findUserMiddleware);
app.use(authUser);

app.use(tasksRoutes);
app.use(sessionsRoutes);
app.use(registrationsRoutes);
// let db = new sqlite3.Database('proyecto-backend');

app.get('/', function(req,res){
    res.render('home',{user: req.user});
})

app.listen(3000);
