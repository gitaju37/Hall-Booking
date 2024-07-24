import rooms from './room.controller.js'
let bookings = [
    {
        Booking_id: 1,
        Customer_id: 11,
        Customer_name: "Ajith",
        Date: "20-07-2024",
        Start_time: "20-07-2024-06-10-00",
        End_time: "21-07-2024-17-15-10",
        room_id: 1,
        room_name: "room 1"
    },
    {
        Booking_id: 2,
        Customer_id: 12,
        Customer_name: "Marshal",
        Date: "18-07-2024",
        Start_time: "18-07-2024-06-10-00",
        End_time: "19-07-2024-17-15-10",
        room_id: 2,
        room_name: "room 2"
    },
    {
        Booking_id: 3,
        Customer_id: 12,
        Customer_name: "Marshal",
        Date: "20-07-2024",
        Start_time: "20-07-2024-06-10-00",
        End_time: "21-07-2024-17-15-10",
        room_id: 2,
        room_name: "room 2"
    },
    {
        Booking_id: 4,
        Customer_id: 12,
        Customer_name: "Marshal",
        Date: "22-07-2024",
        Start_time: "22-07-2024-06-10-00",
        End_time: "23-07-2024-17-15-10",
        room_id: 2,
        room_name: "room 2"
    }
]

// let Customers = [
//     {
//         Customer_id: 11,
//         Customer_name: "Ajith",
//         Customer_email: "ajith@gmail.com",
//         Customer_phone: "9876543210"
//     },
//     {
//         Customer_id: 12,
//         Customer_name: "Marshal",
//         Customer_email: "marshal@gmail.com",
//         Customer_phone: "9876543210"
//     }
// ]

export const bookRoom = ( req, res ) => {

    try {
        let { Customer_name, Date, Start_time, End_time, room_id, Customer_id } = req.body
        let room = rooms.filter( ( e ) => e.room_status === "Available" && e.room_id == room_id )
        if ( ( !room ) ) {
            res.status( 400 ).json( { messege: "Room is Not Available" } )
        }
        else {
            let bookingRoomDate = bookings.filter( ( rooms ) => rooms.Date === Date )
            if ( bookingRoomDate.length > 0 ) {
                res.status( 400 ).json( { messege: "Date is Not Available" } )
            } else {
                const booking = {
                    Booking_id: bookings.length + 1,
                    Customer_name,
                    Start_time,
                    End_time,
                    room_id,
                    Date: Date,
                    Customer_id,
                    booking_date: Date,
                    status: "booked"
                }
                bookings.push( booking )
                return res.status( 200 ).json( { messege: "Room Booked Succesfully", data: bookings } )
            }
        }

    } catch ( error ) {
        console.log( error )

    }
}
export const getBookedRooms = ( req, res ) => {
    try {
        const bookedRooms = bookings.map( ( booking ) => {
            return {
                room_id: booking.room_id,
                room_name: booking.room_name,
                customer_name: booking.Customer_name,
                date: booking.Date,
                start_time: booking.Start_time,
                end_time: booking.End_time,
            };
        } );

        res.status( 200 ).json( bookedRooms )
    } catch ( error ) {
        res.status( 400 ).send( "internal server error" )

    }
};

export const getAllCustomerData = ( req, res ) => {
    try {
        const customerData = bookings.map( ( booking ) => {
            const room = rooms.find( ( r ) => r.room_id === booking.room_id )
            return {
                Customer_Name: booking.Customer_name,
                date: booking.Date,
                Start_time: booking.Start_time,
                End_time: booking.End_time
            }
        } )
        res.status( 200 ).json( { messege: "Customer data Send Sucesfully", data: customerData } )
    } catch ( error ) {
        res.status( 400 ).send( "internal server error" )

    }

}

export const getCustomerBookingCount = (req, res) => {
    try {
        const { CustomerId } = req.params.id
        const customerBookings = bookings.filter( booking => booking.Customer_id === parseInt( CustomerId ) );
        console.log( customerBookings )
        const customerDetails = customerBookings.map( booking => ( {
            Customer_Name: booking.Customer_name,
            Date: booking.Date,
            Start_time: booking.Start_time,
            End_time: booking.End_time,
            Room_id: booking.room_id,
            Room_Name: booking.room_name
        } ) );

        const bookingCount = customerBookings.length;

        res.status( 200 ).json( {
            Customer_id: CustomerId,
            Booking_count: bookingCount,
            Customer_Details: customerDetails
        } );
    } catch ( error ) {
        res.status( 400 ).send( "Internal server error" );
    }
};
