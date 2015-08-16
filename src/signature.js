var JsSHA = require('jssha');

module.exports = {
    createStringFromJSON: function (object) {
        var keys = [];
        for (var k in object) {
            if (object.hasOwnProperty(k) && !k.match(/^sop_/)) {
                keys.push(k);
            }
        }
        keys.sort();
        var len = keys.length;
        var query = [];
        for (var i = 0; i < len; i++) {
            var k = keys[i];
            query.push(k + '=' + object[k]);
        }
        return query.join('&');
    },
    createSignature: function (args, app_secret) {
        var sha = new JsSHA('SHA-256', 'TEXT');
        sha.setHMACKey(app_secret, 'TEXT');
        if (typeof args == 'object') {
            args = this.createStringFromJSON(args);
        }
        sha.update(args);
        return sha.getHMAC('HEX');
    }
};
