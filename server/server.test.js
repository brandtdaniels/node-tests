const request = require('supertest')
const expect = require('expect')

var app = require('./server').app

describe('A server', () => {

  context('when getting the root document', () => {

    it('should return hello world response', (done) => {

      request(app)
        .get('/')
        .expect(404)
        .expect((response) => {
          expect(response.body).toInclude({
            error: 'Page not found.'
          })
        })
        .end(done)

    })

  })

  context('when getting a list of users', () => {

    it('should return my user object', (done) => {

      request(app)
        .get('/users')
        .expect(200)
        .expect((response) => {
          expect(response.body).toInclude({
            name: 'Brandt'
          })
        })
        .end(done)

    })

  })

})
