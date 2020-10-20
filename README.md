# Fastify Secrets Env

![CI](https://github.com/nearform/fastify-secrets-env/workflows/CI/badge.svg)

Fastify secrets plugin for environment variables

> This plugin is mostly intended for your local dev environmemt where you may want to use the same api as production-ready plugins like [fastify-secrets-gcp] whilest still reading config from environment variables.
> We suggest to use a proper secret manager in production.

## Installation

```
npm install --save fastify-secrets-env
```

## Usage

This plugin will read secrets from environment variables and decorate fastify with a secrets object.
It is agnostic on how the environment variables are set: it is **not** a replacement of `dotenv`, and can work in conjuction with it.

### Add plugin to your fastify instance

```js

const FastifySecrets = require('fastify-secrets-env')

fastify.register(FastifySecrets, {
  secrets: {
    dbPassword: 'PG_PASS'
  }
})

```

### Access you secrets

```js

await fastify.ready()

console.log(fastify.secrets.dbPassword) // content of process.env.PG_PASS

```

### Plugin options

The plugin only expect the `secrets` object in the options.

It is a map of keys and environment variables names. `fastify-secrets-env` will decorate the fastify server with a `secrets` object where keys will be the same keys of the options and the value will be the content of the environment variables referenced by the value.


## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

Copyright NearForm Ltd 2020. Licensed under the [Apache-2.0 license](http://www.apache.org/licenses/LICENSE-2.0).

[fastify-secrets-gcp]: https://github.com/nearform/fastify-secrets-gcp
