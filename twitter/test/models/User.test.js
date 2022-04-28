const User = require ('./../../app/models/User.js')

describe("Unit Test for User class", ()=>{

    test('Create an User object', () =>{

    const user =new User (1,"carlogilmar","carlo","Bio","dateCreated","lastUpdated")


    expect(user.id).toBe(1)
    expect(user.username).toBe("carlogilmar")
    expect(user.name).toBe("carlo")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).toBe("dateCreated")
    expect(user.lastUpdated).toBe("lastUpdated")

});
})