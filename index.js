import express from 'express';
import cors from 'cors';
import getRouter from './Routers/room.router.js'
import getBooking from './Routers/booking.router.js'

const app = express();
app.use( cors() )
app.use( express.json() )
const PORT = 4000;

app.get( '/', ( req, res ) => {
    res.status(200).send("APP is working Fine Very Well")

} )

app.use( '/room', getRouter )
app.use('/booking', getBooking)





app.listen( PORT, () => {
    console.log("APP is listening in the port: ",PORT)

})
