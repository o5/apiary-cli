const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/me/apis', (req, res) => {
    if (req.headers.authorization && req.headers.authorization.toLowerCase() === 'bearer bad') {
        res.status(401).json({ error: 'Token Invalid' });
        return;
    }

    res.json({
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
    });
});

app.post('/blueprint/publish/:apiSubDomain', (req, res) => {
    if (!req.body || !req.body.code || req.body.code === 'bad-blueprint' || req.params.apiSubDomain === 'bad-domain') {
        res.status(500).end();
        return;
    }

    if (req.headers.authentication.startsWith('token')) {
        console.error('NOTE for Apiary Guys: "Token" SHOULD NOT be case-sensitive'); // eslint-disable-line no-console
        res.status(501).end();
        return;
    }

    res.status(201).end();
});

app.listen(3000);
