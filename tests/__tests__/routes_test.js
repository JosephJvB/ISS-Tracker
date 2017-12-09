const request = require('supertest')
const requost = require('superagent')

const server = require('../../server/server')

describe('test ISS API', () => {
  test('API will return coords', (done) => {
    requost
      .get('https://api.wheretheiss.at/v1/satellites/25544.')
      .then(res => {
        expect(res.statusCode).toBe(200)
        done()
      })
  })
})

describe('test pic route', () => {
  test('puppeteer will respond with a pic', async () => {
    const response = await request(server)
      .get('/api/v1/picScrape/Dakar')
    expect(response.statusCode).toBe(200)
  })
})
