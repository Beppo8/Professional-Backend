const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['asdafeaf3raflkj3', 'aafdsd776ad8762']
}));

app.get('/', (req,res) => {
    req.session.visits = req.session.visits || 0;

    req.session.visits = req.session.visits + 1;

    res.send(`${req.session.visits} visitas(s)`)
});

app.listen(3000);