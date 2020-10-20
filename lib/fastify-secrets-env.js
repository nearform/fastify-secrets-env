'use strict'

const { buildPlugin } = require('fastify-secrets-core')

const EnvClient = require('./client')

module.exports = buildPlugin(EnvClient, {
  name: 'fastify-secrets-env'
})
