import express from 'express';

const app = express();

//----- Import Routes -----//
import authenticationRoutes from './routes/User.Routes.js'
import employeeRoutes from './routes/Employee.Routes.js'
//---- Middlewares ------///

//-- Global Settings ---- //
app.use( express.json() );
app.use( authenticationRoutes )
app.use(employeeRoutes)

export default app;




