const express = require('express')
const server = express()
const bcrypt = require('bcrypt')
const restrictedAuth = require('./auth/auth-middleware')
const session = require('express-session')