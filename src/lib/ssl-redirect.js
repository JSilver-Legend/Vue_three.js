module.exports = function (environments, status) {
    environments = environments || ['production'];
    status = status || 302;
    return function (req, res, next) {

        console.log(req.originalUrl);

        if (environments.indexOf(process.env.NODE_ENV) >= 0) {
            let url = 'https://' /* + (!req.hostname.includes('www') ? 'www.' : '') */ + req.hostname + req.originalUrl;
            if (req.headers['x-forwarded-proto'] != 'https' /* || !req.hostname.includes('www') */) {
                res.redirect(status, url);
            } else {
                next();
            }
        }
        else {
            next();
        }
    };
};
