const expect = require('expect')

const utils = require('./utils')

describe('A utility', () => {

  context('when adding', () => {

    it('should add two numbers', () => {

      var result = utils.add(33, 11)

      expect(result).toBe(44).toBeA('number')

    })

    it('should async add two numbers', (done) => {

      utils.asyncAdd(4, 3, (sum) => {

        expect(sum).toBe(7).toBeA('number')

        done()

      })

    })

  })

  it('should square a number', () => {

    var result = utils.square(3)

    expect(result).toBe(9).toBeA('number')

  })

  it('should async square a number', (done) => {

    utils.asyncSquare(3, (square) => {

      expect(square).toBe(9).toBeA('number')

      done()

    })

  })

  it('should set the first and last name on a user', () => {

    var user = {location: 'Mission Viejo', age: 37}

    var result = utils.setName(user, 'Brandt Daniels')

    expect(result).toInclude({
      firstName: 'Brandt',
      lastName: 'Daniels'
    })

  })

})
