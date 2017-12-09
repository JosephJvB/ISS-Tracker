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

// test below doesnt test scrape, just route

describe('test pic route', () => {
  test('puppeteer will respond with a pic', async () => {
    const response = await request(server)
      .get('/api/v1/picScrape/test')
    expect(response.statusCode).toBe(200)
  })
})
