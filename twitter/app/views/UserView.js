const UserService = require('./../services/UserService')

class UserView {
    static createUser(payload) {
        if (!payload) {
            return { error: 'payload no existe' }
        }
        if (payload.username === null || Number.isNaN(payload.name) || !payload.id) {
            return { error: 'necesitan tener un valor válido' }
        }

        if (payload.username === null || payload.name === null || payload.id === null) {
            return { error: 'necesitan tener un valor válido' }
        }

        const user = UserService.create(payload.id, payload.username, payload.name)

        return user
    }
}

module.exports = UserView