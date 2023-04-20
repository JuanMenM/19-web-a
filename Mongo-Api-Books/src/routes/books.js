import { Router } from "express";
const router = Router();

//Import DB Connection
import { connect } from '../database.js';


//Get books
router.get( '/books', async ( req, res ) => {
    //Acces to the db
    const db = await connect();
    //Acces to the books collection and get all the documents within
    const result = await db.collection( 'books' ).find().toArray();
    console.log(result)
    //[{name:123},{name:1234},{name:!234},{name:1234} ]
    res.json({code: '200', result : result})
})

//Create books


//Update books


//Delete books


//Find by title

export default router