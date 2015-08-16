var Auth = function (app_id, app_secret) {

    if (!app_id) {
        throw '"app_id" is required';
    }
    if (!app_secret) {
        throw '"app_secret" is required';
    }

    this.app_id = app_id;
    this.app_secret = app_secret;
};

Auth.prototype.getAppId = function () { return this.app_id; };
Auth.prototype.getAppSecret = function () { return this.app_secret; };

module.exports = Auth;
