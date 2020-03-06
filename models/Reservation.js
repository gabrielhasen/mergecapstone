const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//  Reservation Schema
const ReservationSchema = new Schema ({
    id: {
        type: Number,
        required: true
    },
    start: {
        type: Number,  //Stored in Unix Timestamp format
        required: true
    },
    end: {
        type: Number,  //Stored in Unix Timestamp format
        required: true
    },
    resourceId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        default: 'Busy'
    },
    bgColor: {
        type: String,
        default: '#c41d1d'
    },
});

module.exports = Task = mongoose.model("reservations", ReservationSchema);