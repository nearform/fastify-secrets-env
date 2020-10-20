'use strict'

class EnvClient {
  async get(name) {
    if (!(name in process.env)) {
      throw new Error(`Secret not found: ${name}`)
    }

    return process.env[name]
  }
}

module.exports = EnvClient
