import { Router } from "express";
const router = Router();

//Import DB Connection
import { connect } from '../database.js';
import { ObjectId } from "mongodb";


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
router.post( '/create-book', async( req, res ) => {
    //Access to the db
    const db = await connect();
    //Get the request body to insert in the DB
    console.log( req.body )
    //#1
    const book = {
        title: req.body.title,
        description: req.body.description
    }
    //#2
    // const { title, description } = req.body
    // const book = {title,description}

    ///Create book in the DB
    const result = await db.collection( 'books' ).insertOne( book );
    console.log(result)

    res.json( {
        code: "201",
        result: result.insertedId
    })

})

//Update books
router.put( '/update-book/:bookid', async( req, res ) => {
    //get the bookid parameter 
    const bookid = req.params.bookid;
   // console.log( bookid )
    const bookUpdate = {
        title: req.body.title,
        description: req.body.description
    }
    const db = await connect();
    //Pending Update 
    //const result = await db.collection( 'books' ).updateOne( { _id: bookid }, { $set: bookUpdate } )
    //console.log(result)
    return true
})

//Delete books


//Find by title

export default router