const { Router } = require('express');

const routes = new Router();

const UserController = require('./app/Controllers/UserController');

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/', (req, res) => {
    res.json({ message: 'hello hello' })
})

module.exports = routes;