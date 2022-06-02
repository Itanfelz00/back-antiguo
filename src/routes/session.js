const KoaRouter = require('koa-router');

const router = new KoaRouter();
const bcrypt = require('bcrypt')




router.post("/signup", async (req, res) => {
    const {email, nickname, password} = ctx.params;

    console.log(ctx.params)
    
    return
    
    let User;
    try {
        User = await user.findOne({ where: {username: username} });
    } 
    catch (error) {
        if (err){
            const errorMessage = error.errors.map(e => e.message);
            res.status(400).json({error: errorMessage})
        }
    }
    if (User) return res.status(400).json({error: "Username or email are already used"});

    bcrypt.hash(password, 10).then((hash) => {
        user.create({
            nickname: nickname,
            email: email,
            username: username,
            password: hash,
        })
          .then((User) => {
              const accessToken = createTokens(User);
              res.json({message: "User succesfully registered", token: accessToken});
          })
          .catch((err) => {
              if (err) {
                  res.status(400).json({error: err});
              }
          });
    }); 
});