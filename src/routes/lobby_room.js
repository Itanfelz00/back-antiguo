const KoaRouter = require('koa-router');

const router = new KoaRouter();


// crear lobby
router.post('/create', async (ctx) => {
    const lobby = ctx.orm.lobbyRoom.build(ctx.request.body);
    try {
      await lobby.save({ fields: ['name'] });   
      ctx.status = 201;
      ctx.body = lobby;
      //ctx.body = UserSerializer.serialize(lobby);

    } catch (error) {
        const errorMessage = error.errors.map(e => e.message);
        ctx.body = errorMessage;
        ctx.status = 400;
    }
});

// show lobby and players of it
router.get('/:id', async (ctx) => {
    const lobbyRoomId = ctx.params.id;
    const lobbyRoom = await ctx.orm.lobbyRoom.findOne({ where: {id: lobbyRoomId}});
    const users = await lobbyRoom.getUsers();
    const numPlayers = await lobbyRoom.countUsers();
    ctx.body = {
        numPlayers,
        lobbyRoom,
        users
    };
    ctx.status = 200;
});


// show game and its players
router.get('/game/:gameid', async (ctx) => {
    const gameId = ctx.params.gameid;
    const game = await ctx.orm.game.findOne({ where: {id: gameId}});
    const players = await game.getPlayers();
    ctx.body = {
        game,
        players,
    };
    ctx.status = 200;
});

// startGame
router.post('/:lobbyId/startGame', async (ctx) => {
    //deberiamos chequear quien manda la operacion
    const lobbyRoomId = ctx.params.lobbyId;
    const lobbyRoom = await ctx.orm.lobbyRoom.findOne({ where: {id: lobbyRoomId}});
    const users = await lobbyRoom.getUsers();
    const numPlayers = await lobbyRoom.countUsers();

    // revisar si la sala efectivamente cuenta con las condiciones para partir
    // primero se inicializa el modelo game
    const game = await ctx.orm.game.build({numberOfPlayers: numPlayers});
    await game.save();
    
    await game.initLands(ctx.orm.land, game.id);
    
    //inicializamos los jugadores como players (la funcion es asincronica y hay que arreglarla)
    users.forEach(user => { 
          const player =  ctx.orm.player.build({gameId: game.id, userId: user.dataValues.id});
          player.save();
        });
    
    ctx.body = {
        game,
    };
    ctx.status = 200;
});

module.exports = router;