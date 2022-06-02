const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const session = require('./session');

const router = new KoaRouter();


router.use('/session', session.routes());

module.exports = router;
