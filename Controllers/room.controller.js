let rooms = [
    {
        room_id: 1,
        room_name: "room 1",
        room_status: "available",
        room_capacity: 4,
        amenities: [ "TV", "AC", "Wifi" ],
        price_per_hour: 1000
    },
    {
        room_id: 2,
        room_name: "room 2",
        room_status: "available",
        room_capacity: 2,
        amenities: [ "TV", "AC" ],
        price_per_hour: 500
    },
    {
        room_id: 3,
        room_name: "room 3",
        room_status: "booked",
        room_capacity: 6,
        amenities: [ "TV", "AC", "Wifi" ],
        price_per_hour: 1500
    },
    {
        room_id: 4,
        room_name: "room 4",
        room_status: "available",
        room_capacity: 4,
        amenities: [ "TV", "Wifi", "AC", "Fridge" ],
        price_per_hour: 2000
    }
]

export const createRoom = ( req, res ) => {
    try {
        const { room_name, room_status, room_capacity, amenities, price_per_hour } = req.body;
        const createNewRoom = {
            id: rooms.length + 1,
            room_name: room_name,
            room_status: room_status,
            room_capacity: room_capacity,
            amenities: amenities,
            price_per_hour: price_per_hour
            
        };
        rooms.push( createNewRoom )
        res.status(200).json({messege:"Room Created Succesfully",data:rooms})
        
    } catch ( error ) {
        res.status(401).send("internal server error")
        
    }
}

export const allRoomDetails = ( req, res ) => {
    try {
        res.status(200).json({data:rooms})
        
    } catch (error) {
        console.log( error );
    }
}

export default rooms