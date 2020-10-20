'use strict'

const { test } = require('tap')

const EnvClient = require('../lib/client')

test('get', (t) => {
  t.plan(2)

  t.test('happy path', async (t) => {
    process.env.SECRET = 'secret content'
    t.plan(1)

    const client = new EnvClient()
    const secret = await client.get('SECRET')

    t.equal(secret, 'secret content', 'gets data from env')
  })

  t.test('sdk error', async (t) => {
    t.plan(1)

    // make sure secret doesn't exist
    delete process.env['NOT-EXISTS']

    const client = new EnvClient()
    const promise = client.get('NOT-EXISTS')

    await t.rejects(promise, 'throws error')
  })
})
