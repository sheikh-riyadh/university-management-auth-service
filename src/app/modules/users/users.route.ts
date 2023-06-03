import express from 'express'
import { createUser } from './users.controller'

const route = express.Router()

route.post('/create-user', createUser)

export default route
