const express = require('express')
const viewRouter = express.Router()
const apiRouter = express.Router()

// User Model
class User {
  constructor (id, name, email) {
    this.id = id
    this.name = name
    this.email = email
  }
}

// User Repository
class UserRepository {
  #users = []
  #nextId = 1

  getAll () {
    return this.#users
  }

  getById (id) {
    return this.#users.find(user => user.id === id)
  }

  create (user) {
    user.id = this.#nextId++
    this.#users.push(user)
    return user
  }

  update (id, updatedUser) {
    const index = this.#users.findIndex(user => user.id === id)
    if (index !== -1) {
      this.#users[index] = { id, ...updatedUser }
      return this.#users[index]
    }
    return null
  }

  delete (id) {
    const index = this.#users.findIndex(user => user.id === id)
    if (index !== -1) {
      return this.#users.splice(index, 1)
    }
    return null
  }
}

const userRepository = new UserRepository()

/* GET users listing. */
viewRouter.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

/* API Routes */

// Get all users
apiRouter.get('/', (req, res) => {
  res.json(userRepository.getAll())
})

// Get user by ID
apiRouter.get('/:id', (req, res) => {
  const user = userRepository.getById(parseInt(req.params.id))
  if (user) {
    res.json(user)
  } else {
    res.status(404).send('User not found')
  }
})

// Create a new user
apiRouter.post('/', (req, res) => {
  const newUser = new User(null, req.body.name, req.body.email)
  const createdUser = userRepository.create(newUser)
  res.status(201).json(createdUser)
})

// Update a user
apiRouter.put('/:id', (req, res) => {
  const updatedUser = { name: req.body.name, email: req.body.email }
  const user = userRepository.update(parseInt(req.params.id), updatedUser)
  if (user) {
    res.json(user)
  } else {
    res.status(404).send('User not found')
  }
})

// Delete a user
apiRouter.delete('/:id', (req, res) => {
  const user = userRepository.delete(parseInt(req.params.id))
  if (user) {
    res.status(204).send()
  } else {
    res.status(404).send('User not found')
  }
})

module.exports = {
  viewRouter,
  apiRouter
}
