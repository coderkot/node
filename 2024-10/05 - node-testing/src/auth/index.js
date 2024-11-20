const USERNAME = 'admin'
const PASSWORD = 'password'

module.exports = {
  check(username, password) {
    if (username !== USERNAME || password !== PASSWORD) {
      return { success: false, errors: [ 'incorrect username or password' ]}
    }

    return { success: true }
  }
}
