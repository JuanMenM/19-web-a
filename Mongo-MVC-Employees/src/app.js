import express from 'express';

const app = express();

//----- Import Routes -----//
import authenticationRoutes from './routes/User.Routes.js'
//---- Middlewares ------///

//-- Global Settings ---- //
app.use( express.json() );
app.use(authenticationRoutes)

export default app;




