const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//  Reservation Schema
const GradHoursSchema = new Schema ({
    id: {       //id of the reservation
        type: Number,
        required: true
    },
    start: {        //format: 'YYYY-MM-DD HH:MM:SS'
        type: String,  
        required: true
    },
    end: {          //format: 'YYYY-MM-DD HH:MM:SS'
        type: String,   
        required: true
    },
    resourceId: {   //Machine id - Maybe connect to machines id?
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

module.exports = Task = mongoose.model("gradhours", GradHoursSchema);