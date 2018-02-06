# apiary-cli

A command-line client for Apiary API.

## Usage

**$ apiary-cli --help**

```bash
Usage: apiary-cli [options]

  A command-line client for Apiary API


  Options:

    -V, --version  output the version number
    -h, --help     output usage information
```

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

#### Coding Style
```bash
$ npm run cs
```

## License
MIT @ [Petr Bugyík][link-twitter]

[link-issues]: https://github.com/o5/apib2json/issues
[link-nvm]: https://github.com/creationix/nvm
[link-docker-ce]: https://www.docker.com/community-edition
[link-twitter]: https://twitter.com/bugyik
