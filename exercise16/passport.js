import 'dotenv/config'
import passport from 'passport'
import passportJWT from 'passport-jwt'
import db from './db'
const {SECRET} = process.env
passport.use(
    new passportJWT.Strategy({
        secretOrKey: SECRET,
         jwtFromRequest:passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
    },async (payload,done) =>{
        try {
            const user = await db.one(`SELECT * FROM users WHERE id=$1`,payload.id)
            if(user){
                done(null,user)
            }
            else {
                done(null,false)
            }
            
        } catch (error) {
            done(error,false)
        }
        
    })
)
