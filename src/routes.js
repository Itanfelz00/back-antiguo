const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const user = require('./routes/user');
const lobbyRoom = require('./routes/lobby_room');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/user', user.routes());
router.use('/lobbyRoom', lobbyRoom.routes());


module.exports = router;
