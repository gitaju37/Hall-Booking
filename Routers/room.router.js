import express from 'express';
import { allRoomDetails, createRoom } from '../Controllers/room.controller.js';


const router = express.Router()

router.post( '/createroom', createRoom )
router.get('/getrooms',allRoomDetails)





export default router