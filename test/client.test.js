import { describe, test } from 'node:test'

import EnvClient from '../lib/client.js'

describe('get', () => {
  test('happy path', async (t) => {
    process.env.SECRET = 'secret content'

    const client = new EnvClient()
    const secret = await client.get('SECRET')

    t.assert.deepStrictEqual(secret, 'secret content', 'gets data from env')
  })

  test('sdk error', async (t) => {
    // make sure secret doesn't exist
    delete process.env['NOT-EXISTS']

    const client = new EnvClient()
    const promise = client.get('NOT-EXISTS')

    await t.assert.rejects(promise, 'throws error')
  })
})
