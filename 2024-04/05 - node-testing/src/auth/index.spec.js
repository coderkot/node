const auth = require('./')

describe('auth.check', () => {
  test('it should successfully pass the check with the correct credentials', () => {
    const username = 'admin'
    const password = 'password'

    const result = auth.check(username, password)

    expect(result).toEqual({ success: true });
  })

  test('it should failure with the incorrect username', () => {
    const username = 'wrong-username'
    const password = 'password'

    const result = auth.check(username, password)

    expect(result).toEqual({ success: false, errors: [ 'incorrect username or password' ] });
  })

  test('it should failure with the incorrect password', () => {
    const username = 'username'
    const password = 'wrong-password'

    const result = auth.check(username, password)

    expect(result).toEqual({ success: false, errors: [ 'incorrect username or password' ] });
  })

  test('it should failure with the incorrect credentials', () => {
    const username = 'wrong-username'
    const password = 'wrong-password'

    const result = auth.check(username, password)

    expect(result).toEqual({ success: false, errors: [ 'incorrect username or password' ] });
  })

  test('it should failure with the empty password', () => {
    const username = '12'
    const password = ''

    const result = auth.check(username, password)

    expect(result).toEqual({ success: false, errors: [ 'incorrect username or password' ] });
  })
})
