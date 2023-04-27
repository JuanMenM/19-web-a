import User from '../models/User.js';
import bcrypt from "bcryptjs";

const signup = async( req, res ) => {
    const { name, email, password } = req.body;
    //Encrypt Password before insert
    //123 =  Hash = 6gdhdffifoflflfufunvnvnvnvlsrumdsgasd   Salt =  10 random words
    const encryptPassword = bcrypt.hashSync( password, 10 );

    const newUser = new User( { name: name, email: email, password: encryptPassword, role: "admin" } );
    await newUser.save();

    console.log( newUser );
    return true   

}
