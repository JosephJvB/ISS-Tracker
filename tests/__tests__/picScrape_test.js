import puppet from '../../server/routes/puppet'

test('scraper returns wikipedia img src', async () => {
  const cityArr = ['Dakar', 'New_York_City', 'Oral,_Kazakhstan', 'Santa_Isabel_Island', 'Pheonix,_Arizona', 'Santarém,_Pará', 'Jujuy_Province', 'Córdoba,_Argentina', 'Auckland', 'Tripoli', 'Wellington', 'Ürümqi', 'Shanghai', 'Taipei', 'Paris', 'London', 'Madrid', 'Manchester', 'Moscow', 'Brisbane', 'Los_Angeles', 'San_Fransisco', 'Seattle', 'Melbourne', 'Ho_Chi_Minh_City', 'Tokyo', 'Sapporo', 'Brussels', 'Berlin', 'Oslo', 'Reykjavík', 'The_Hague', 'Amsterdam', 'Rotterdam', 'Malmo', 'Durban', 'Dubai', 'Turkmenistan', 'Tehran', 'Hong_Kong', 'Brasília', 'São_Paulo', 'Seoul']
  const randNum = Math.floor(Math.random() * cityArr.length)
  const city = cityArr[randNum]
  const scraped = await puppet.scrapePic(city)
  expect(scraped.includes('upload.wikimedia.org/wikipedia/commons/thumb'))
})
