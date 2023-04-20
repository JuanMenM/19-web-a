import { Router } from "express";
const router = Router();

router.get( '/main', ( req, res ) => {
    //Request

    //Response
    res.send('Welcome Devf')
    
} )
export default router