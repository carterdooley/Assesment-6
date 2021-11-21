const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Return Array', async ()=> {
        const list = shuffleArray([])
        expect(list).toEqual([])
    })
})