import express from 'express'
import {bookRoom, getAllCustomerData,getBookedRooms, getCustomerBookingCount} from '../Controllers/booking.controller.js';



const router = express.Router();
router.post( '/bookroom', bookRoom )
router.get( '/bookedroomdetails', getBookedRooms )
router.get('/getcustomerdata',getAllCustomerData)
router.get( '/getcount/:id', getCustomerBookingCount )


export default router