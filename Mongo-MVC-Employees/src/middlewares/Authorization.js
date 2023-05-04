import jwt from "jsonwebtoken";
import config from "../config.js";
import User from '../models/User.js';

export const verifyToken = async ( req, res, next ) => {
    try {

        console.log("executing middleware")
        const token = req.headers.authorization
        if ( !token ) {
            return res.status(503).json({"message": "no token provided!!"})
        }
    
        //*** If token was provided ** //
    
        //Decode the JWT
        const jwtdecoded = jwt.decode( token, config.secret )
        console.log( jwtdecoded );
    
        //Find the user by id
        const findUser = await User.find( { _id: jwtdecoded.id } ).exec();
        console.log( findUser )
        next() ///->Execute the next function ;

        
    } catch (error) {
        res.status(500).json({"message": "Unauthorized!!"})
    }
   


}