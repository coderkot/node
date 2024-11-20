const Exchange = require('.')

describe('exchange.getData', () => {
  test('it should return list of exchange with Diff field', async () => {
    const exchange = new Exchange()
    jest.spyOn(exchange, 'fetchData').mockImplementation(() => {

    return Promise.resolve([
      {
        "ID": "R01010",
        "NumCode": "036",
        "CharCode": "AUD",
        "Nominal": 1,
        "Name": "Австралийский доллар",
        "Value": 53.9159,
        "Previous": 55.8293
      },
      {
          "ID": "R01020A",
          "NumCode": "944",
          "CharCode": "AZN",
          "Nominal": 1,
          "Name": "Азербайджанский манат",
          "Value": 43.2382,
          "Previous": 42.1171
      }
    ])});

    const result = await exchange.getData()

    expect(result).toMatchSnapshot();
  })
})
