class Client {
    getUserApiList() {
        return {
            apis: [
                {
                    apiName: 'Public Personal API',
                    apiDocumentationUrl: 'http://docs.publicpersonalapi.apiary.io/',
                    apiSubdomain: 'publicpersonalapi',
                    apiIsPrivate: false,
                    apiIsPublic: true,
                    apiIsTeam: false,
                    apiIsPersonal: true,
                },
                {
                    apiName: 'Public Team API',
                    apiDocumentationUrl: 'http://docs.publicteamapi.apiary.io/',
                    apiSubdomain: 'publicteamapi',
                    apiIsPrivate: false,
                    apiIsPublic: true,
                    apiIsTeam: true,
                    apiIsPersonal: false,
                },
                {
                    apiName: 'Private Team API',
                    apiDocumentationUrl: 'http://docs.privateteamapi.apiary.io/',
                    apiSubdomain: 'privateteamapi',
                    apiIsPrivate: true,
                    apiIsPublic: false,
                    apiIsTeam: true,
                    apiIsPersonal: false,
                },
            ],
        };
    }

    publishBlueprint(apiSubdomain, stdin) {
        console.log(apiSubdomain, stdin); // eslint-disable-line no-console
    }
}

module.exports = Client;
