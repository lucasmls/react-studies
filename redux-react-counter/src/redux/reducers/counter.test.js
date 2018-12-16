import { expect } from 'chai'
import counter, { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT, initialState } from './counter'

describe('Counter', () => {
  it('Counter should be a function', () => {
    expect(counter).to.be.a('function')
  })

  it('Should return the same state if the action is unknown', () => {
    const before = [1, 2, 3]
    const after = [1, 2, 3]
    const action = { type: null }
    expect(counter(before, action)).to.be.deep.equal(after)
  })

  it('Should return the initial state if the last state is undefined', () => {
    const before = undefined
    const after = initialState
    const action = {}
    expect(counter(before, action)).to.be.deep.equal(after)
  })

  it('Should add a counter', () => {
    const before = []
    const after = [0]
    const action = { type: ADD_COUNTER }
    expect(counter(before, action)).to.be.deep.equal(after)
  })

  it('Should add another counter', () => {
    const before = [0, 10, 20]
    const after = [0, 10, 20, 0]
    const action = { type: ADD_COUNTER }
    expect(counter(before, action)).to.be.deep.equal(after)
  })

  it('Should remove a specific counter', () => {
    const before = [1, 2, 3, 4, 5, 6]
    const after = [1, 2, 3, 5, 6]
    const action = { type: REMOVE_COUNTER, index: 3 }
    expect(counter(before, action)).to.be.deep.equal(after)
  })

  it('Should remove another specific counter', () => {
    const before = [10, 20, 30, 10]
    const after = [10, 30, 10]
    const action = { type: REMOVE_COUNTER, index: 1 }
    expect(counter(before, action)).to.be.deep.equal(after)
  })

  it('Should increment a specific counter', () => {
    const before = [1, 2, 3]
    const after = [1, 3, 3]
    const action = { type: INCREMENT, index: 1 }
    expect(counter(before, action)).to.be.deep.equal(after)
  })

  it('Should increment another specific counter', () => {
    const before = [10, 20, 30,]
    const after = [10, 21, 30]
    const action = { type: INCREMENT, index: 1 }
    expect(counter(before, action)).to.be.deep.equal(after)
  })

  it('Should decrement a specific counter', () => {
    const before = [1, 2, 3]
    const after = [1,1, 3]
    const action = { type: DECREMENT, index: 1 }
    expect(counter(before, action)).to.be.deep.equal(after)
  })

  it('Should decrement another specific counter', () => {
    const before = [10, 20, 30,]
    const after = [10, 19, 30]
    const action = { type: DECREMENT, index: 1 }
    expect(counter(before, action)).to.be.deep.equal(after)
  })
})


