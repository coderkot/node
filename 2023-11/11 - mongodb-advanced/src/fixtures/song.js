const { faker } = require('@faker-js/faker');

const artists = [
  'TOMORROW X TOGETHER',
  'Taylor Swift',
  'SZA',
  'Morgan Wallen',
  'Miley Cyrus',
  'The Weeknd',
  'Luke Combs',
  'Drake',
  'Sam Smith',
  'Harry Styles'
]

const getSong = () => {
  return {
    artist: faker.helpers.arrayElement(artists),
    genre: faker.music.genre(),
    songName: faker.music.songName(),
    downloads: faker.datatype.number(1_000_000)
  }
}

module.exports = {
  getSong
}