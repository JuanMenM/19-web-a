import User from '../models/User.js';
import bcrypt from "bcryptjs";

export const signup = async( req, res ) => {
    const { name, email, password } = req.body;
    //Encrypt Password before insert
    //123 =  Hash = 6gdhdffifoflflfufunvnvnvnvlsrumdsgasd   Salt =  10 random words
    const encryptPassword = bcrypt.hashSync( password, 10 );

    const newUser = new User( { name: name, email: email, password: encryptPassword, role: "admin" } );

    try {
        await newUser.save();
       return res.json({code: 200, message:"The user was created in the DB!!"})
    } catch (error) {
       return res.json({message: "We could not create the user please check your information"})
    }
      
}

export const login = async ( req, res ) => {
    const { email, password } = req.body;

    //Find the user email in the database and verify if exists
    const findEmail = await User.find( { email: email } ).exec();
    console.log( findEmail );

    //If does not exist send a validation message
    if ( findEmail.length == 0 ) {
        res.json({"code": 400, "message": "this email does not exist!!"})
    } else {
        ////
        //If it does, Verify the password
        //Create JWT and send it to the client
        
    }
    return true

  

    
}
