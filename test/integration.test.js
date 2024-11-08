'use strict'

const { test } = require('node:test')

const Fastify = require('fastify')

const FastifySecrets = require('../lib/fastify-secrets-env.js')

test('integration', async (t) => {
  t.plan(2)

  process.env.TEST_SECRET_1 = 'test content 1'
  process.env.TEST_SECRET_2 = 'test content 2'

  const fastify = Fastify({
    logger: process.env.TEST_LOGGER || false
  })

  fastify.register(FastifySecrets, {
    secrets: {
      test1: `TEST_SECRET_1`,
      test2: `TEST_SECRET_2`
    }
  })

  await fastify.ready()

  t.assert.deepStrictEqual(fastify.secrets.test1, 'test content 1', 'decorates fastify with secret content')
  t.assert.deepStrictEqual(fastify.secrets.test2, 'test content 2', 'decorates fastify with secret content')
})
