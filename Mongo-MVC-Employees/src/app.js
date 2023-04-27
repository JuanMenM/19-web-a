import express from 'express';

const app = express();

//----- Import Routes -----//

//---- Middlewares ------///

//-- Global Settings ---- //
app.use( express.json() );

export default app;




