# apiary-cli

A command-line client for [Apiary API][link-apiary-api].

## Usage

**$ apiary-cli --help**

```bash
Usage: apiary-cli [options] [command]

  A command-line client for Apiary API


  Options:

    -V, --version         output the version number
    --api-host [apiHost]  set API host (default: https://api.apiary.io)
    --bearer [bearer]     set authorization token (default: XXX)
    --token [token]       set authentication token (default: YYY)
    -h, --help            output usage information


  Commands:

    user-api-list                      print a user's list of APIs from apiary.io
    publish-blueprint <api-subdomain>  publish an API Blueprint to apiary.io (requires input from STDIN)
```

> **NOTE**: This project is in development process. If you want to use it, you have to manually obtain authorization token via [POST /authorization][link-apiary-api-auth] and use `--bearer` option. There is also authentication token and this should be used using `--token` option. Both of them you can store into `tmp/cache.json`.

## Contributing

#### Bug Reports & Feature Requests

Please use the [issue tracker][link-issues] to report any bugs or file feature requests.

#### Developing

Pull Requests are welcome!

Do you hate contributing to projects where you have to install direct version of Node.js? I know there are tools like [nvm][link-nvm] but there is also Docker to rescue! To begin developing, you just need `docker` and `docker-compose` installed and do this:

```bash
$ git clone git@github.com:o5/apiary-cli.git && cd apiary-cli/
$ docker-compose up
```

> **TIP**: If you're new to Docker, [Docker Community Edition][link-docker-ce] is the best choice for you

#### Do you need to go inside the container?
```bash
$ docker exec -it apiary-cli sh
```
> **NOTE**: Assumes `docker-composer up` was finished.

#### Tests
```bash
$ npm run mock
$ npm run test
```

#### Tests & Code Coverage
```bash
$ npm run coverage
```

#### Coding Style
```bash
$ npm run cs
```

## License
MIT @ [Petr Bugyík][link-twitter]

[link-apiary-api]: https://apiary.docs.apiary.io
[link-apiary-api-auth]: https://apiary.docs.apiary.io/#reference/authentication/authorization-tokens/create-an-authorization-token
[link-issues]: https://github.com/o5/apib2json/issues
[link-nvm]: https://github.com/creationix/nvm
[link-docker-ce]: https://www.docker.com/community-edition
[link-twitter]: https://twitter.com/bugyik
