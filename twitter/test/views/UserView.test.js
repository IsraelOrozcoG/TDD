const UserView = require('./../../app/views/UserView')

describe ("Test for UserView", () =>{

    test("1. Return an error object when try to create a new user with a null payload" , () => {

        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)

    })

    test ("2 .Return an error object when try to create a new user with a payload invalid properties",() => {
        
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test ("3. Return an error object when try to create a new user with payload whit missing propierties",() =>{
        
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test ("4. create a user by a given valid payload ", () =>{
        
        const payload = {username: "username", id: 1, name: "name"}
        const result = UserView.createUser(payload)
        
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    })

})