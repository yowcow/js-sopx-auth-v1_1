var assert = require('chai').assert;
var sig = require('../src/signature.js');

describe('signature', function () {
    describe('createStringFromJSON', function () {
        it('creates a string from JSON', function () {
            var object = {
                ccc: '333',
                bbb: '222',
                aaa: '111'
            };
            var res = sig.createStringFromJSON(object);

            assert.equal(res, 'aaa=111&bbb=222&ccc=333');
        });

        it('ignores keys with prefix "sop_"', function () {
            var object = {
                sop_hoge: '444',
                ccc: '333',
                bbb: '222',
                aaa: '111'
            };
            var res = sig.createStringFromJSON(object);

            assert.equal(res, 'aaa=111&bbb=222&ccc=333');
        });
    });

    describe('createSignature', function () {
        it('creates signature from a string', function () {
            var res = sig.createSignature('hogefuga', 'foobar');

            assert.equal(res, 'd6d11acdaf4f4daae94d876832a9bbd0411c564d8000936de924d4046a1260f1');
        });

        it('creates signature from an JSON object', function () {
            var res = sig.createSignature({
                ccc: 'ccc',
                bbb: 'bbb',
                aaa: 'aaa',
                sop_hoge: 'hoge'
            }, 'hogehoge');

            assert.equal(res, '2fbfe87e54cc53036463633ef29beeaa4d740e435af586798917826d9e525112');
        });
    });
});
