import 'dotenv/config'
import passport from 'passport'
import passportJWT, { Strategy } from 'passport-jwt'
import db from './db'
const {SECRET} = process.env
passport.use(
    new passportJWT.Strategy({
        SectretOrKey: SECRET,
         jwtFromRequest:passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
    },async (payload,done) =>{
        const user = await db.one(`SELECT * FROM users WHERE id=$1`,payload.id)
    })
)
