const User = require('../models/User');

class UserController {
    async store(req, res) {
        const user = await User.create(req.body);
        return res.json(user);
    }

    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }

    async update(req, res) {
        const id = req.params.id
        const usuarioAtualizado = req.body
        const users = await User.update(id, usuarioAtualizado);
        return res.json(users);
    }

    async delete(req, res) {
        const id = req.params.id
        await User.destroy({ where: { id } });
        return res.json(User);
    }
}

module.exports = new UserController();