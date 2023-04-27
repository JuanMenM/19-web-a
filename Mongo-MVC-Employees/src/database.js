import mongoose from "mongoose";

export async function connect() {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/JWT-Application", {
			useNewUrlParser: true,
		});
		console.log("Database connected!!");
	} catch (error) {
		console.log("Something went wrong!!" + error);
	}
}
