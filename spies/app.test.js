const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('An app', () => {

  var db = {
    saveUser: expect.createSpy()
  }

  app.__set__('db', db)

  it('should call the spy correctly', () => {

    var spy = expect.createSpy()

    spy('Brandt', 37)

    expect(spy).toHaveBeenCalledWith('Brandt', 37)

  })

  it('should call saveUser with user object', () => {

    var email = 'bdaniels@tribalscale.com'
    var password = 'test'

    app.handleSignup(email, password)

    expect(db.saveUser).toHaveBeenCalledWith({email, password})

  })

})
