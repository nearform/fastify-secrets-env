import { buildPlugin } from 'fastify-secrets-core'

import { EnvClient } from './client.js'

export const fastifySecretsEnv = buildPlugin(EnvClient, {
  name: 'fastify-secrets-env'
})
export default fastifySecretsEnv
