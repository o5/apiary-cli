const assert = require('assert');
const client = require('./../../src/client');

const mock = 'http://localhost:3000';

describe('Client', () => {
    describe('#getUserApiList()', () => {
        it('should return response as JSON', async () => {
            const res = await (new client(mock))
                .getUserApiList();

            assert.equal(res.apis[0].apiIsPersonal, true);
            assert.equal(res.apis[1].apiSubdomain, 'publicteamapi');
            assert.equal(res.apis[2].apiIsPersonal, false);
        });

        it('should fail with 401', async () => {
            try {
                await (new client(mock, 'bad')).getUserApiList();
            } catch (error) {
                assert.equal(error.message, 'Request failed with status code 401');
                return;
            }

            assert.fail(true, 'this should never occurs');
        });
    });

    describe('#publishBlueprint()', () => {
        it('should be successful', async () => {
            await (new client(mock))
                .publishBlueprint('best-api', 'FORMAT: X-1A\\nHOST: http://api.example.com');

            assert.ok(true);
        });

        it('should fail with 500', async () => {
            try {
                await (new client(mock)).publishBlueprint('best-api', 'bad-blueprint');
            } catch (error) {
                assert.equal(error.message, 'Request failed with status code 500');
                return;
            }

            assert.fail(true, 'this should never occurs');
        });
    });
});
