import { Router } from "express";
const router = Router();

//Import DB Connection
import { connect } from "../database.js";
import { ObjectId } from "mongodb";

//Get books
router.get("/books", async (req, res) => {
	//Acces to the db
	const db = await connect();
	//Acces to the books collection and get all the documents within
	const result = await db.collection("books").find().toArray();
	console.log(result);
	//[{name:123},{name:1234},{name:!234},{name:1234} ]
	res.json({ code: "200", result: result });
});

//Create books
router.post("/create-book", async (req, res) => {
	//Access to the db
	const db = await connect();
	//Get the request body to insert in the DB
	console.log(req.body);
	//#1
	const book = {
		title: req.body.title,
		description: req.body.description,
	};
	//#2
	// const { title, description } = req.body
	// const book = {title,description}

	///Create book in the DB
	const result = await db.collection("books").insertOne(book);
	console.log(result);

	res.json({
		code: "201",
		result: result.insertedId,
	});
});

//Update books
router.put("/update-book/:bookid", async (req, res) => {
	const bookid = req.params.bookid;
	const bookUpdate = {
		title: req.body.title,
		description: req.body.description,
	};
	const db = await connect();

	//Find the book by id and update  //Update books where bookid = 123 SET title = ? description = ?
	const result = await db.collection("books").updateOne({ _id: ObjectId(bookid) }, { $set: bookUpdate });

	console.log(result);

	if (result.matchedCount > 0) return res.json({ code: 201, message: `Book ${bookid} has been updated!!` });

	return	res.json({ message: `We could not update the book ${bookid}` });
	
} );

router.delete( '/delete-book/:bookid', async ( req, res ) => {
    const bookid = req.params.bookid;
    const db = await connect();
    //
    const result = await db.collection( 'books' ).deleteOne( { _id: ObjectId( bookid ) } );
    console.log( result )
    if ( result.deletedCount > 0 ) return res.json( { code: 201, message: `Book ${bookid} has been deleted!!` } );

    return res.json( { message: `We could not delete the book ${bookid}` } );
    

} );

router.get( '/find-book-by-title', async ( req, res ) => {
    var title = req.query.booktitle;
    console.log( title );
    //Query object Mongo DB
    const query = { title: { $eq: title } };
    const db = await connect();
    const result = await db.collection( 'books' ).find( query ).toArray();
    console.log( result );
    res.json( {
        message: "the following documents contains the requested title",
        result: result
    })

})

export default router;
