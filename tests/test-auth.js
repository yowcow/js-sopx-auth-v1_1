var assert = require('chai').assert;
var Auth   = require('../');

describe('Auth', function () {

    describe('Instance', function () {
        it('fails if app_id is not valid', function () {
            assert.throw(
                function () { new Auth(null, 'hogefuga') },
                /required/
            );
        });

        it('fails if app_secret is not valid', function () {
            assert.throw(
                function () { new Auth(1, null) },
                /required/
            );
        });

        it('should be instantiated', function () {
            var res = new Auth(1, 'hogefuga');
            assert.instanceOf(res, Auth);
        });
    });

    describe('getAppId', function () {
        it('should return app_id', function () {
            var res = new Auth(100, 'hogefuga');

            assert.strictEqual(res.getAppId(), 100);
        });
    });

    describe('getAppSecret', function () {
        it('should return app_secret', function () {
            var res = new Auth(100, 'hogefuga');

            assert.strictEqual(res.getAppSecret(), 'hogefuga');
        });
    });
});
