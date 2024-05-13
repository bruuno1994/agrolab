const mongoose = require('mongoose')
const {Schema} = mongoose

const Device = new mongoose.model('Device',{

        
        toConect: Boolean,
        dateCreated: { type: Date, default: Date.now },
        nameResponsable: String,
        sensorTemp: String,
        sensorUmiAr: String,
        lumen: Boolean,
        sensorSolo1: Number,
        sensorSolo2: Number,
        sensorSolo3: Number   
})


module.exports = Device; // Exportando o modelo