const KoaRouter = require('koa-router');

const router = new KoaRouter();
const bcrypt = require('bcrypt')

//const {createTokens, validateToken} = require("../../helpers/jwt");
// agregar jugador a lobby


router.put('/:id/:lobbyId/addToLobby', async (ctx) => {
    const userId = ctx.params.id;
    const lobbyId = ctx.params.lobbyId;
    try {
        const user = await ctx.orm.user.findOne({ where: {id:userId}})
        if(user){
            user.update({lobby_id: lobbyId});
        };
        ctx.status = 201;
        ctx.body = user;
    } catch (error) {
        const errorMessage = error.errors.map(e => e.message);
        ctx.body = errorMessage;
        ctx.status = 400;
    }
});

router.get('/:id', async (ctx) => {
    const userId = ctx.params.id;
    const user = await ctx.orm.user.findOne({ where: {id: userId}});
    const lobbyRoom = await user.getLobbyRoom();
    ctx.body = {
        user,
        lobbyRoom
    };
    ctx.status = 200;
});


router.get('/player/:id', async (ctx) => {
    const userId = ctx.params.id;
    const user = await ctx.orm.user.findOne({ where: {id: userId}});
    const player = await user.getPlayer();
    ctx.body = {
        user,
        player
    };
    ctx.status = 200;
});

router.put('/', async(ctx) => {
    const userId = ctx.params.id;
    try{
        const player = await ctx.orm.player.findOne({ where: {id:userId}})
        if(player){
            player.update({gold: gold + 100});
    };
    ctx.status = 201;
    ctx.body = player

    } catch (error) {
        const errorMessage = error.errors.map(e => e.message);
        ctx.body = errorMessage;
        ctx.status = 400;
    }
});



router.post("/login", async (req, res) => {
    const {email, password} = req.body;
  
    const User = await user.findOne({where: {email: email}});
  
    if (!User) res.status(400).json({error: "User doesn't exist"});
  
    const dbPassword = User.password;
    bcrypt.compare(password, dbPassword).then((match) => {
      if (!match) {
        res
          .status(400)
          .json({error: "Wrong Username and Password Combination!"});
      } else {
        const accessToken = createTokens(User);
  
        res.json({token: accessToken});
      }
    });
});

module.exports = router;