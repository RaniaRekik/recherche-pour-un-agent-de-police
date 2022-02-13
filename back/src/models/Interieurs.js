const mongoose = require('mongoose')
const Personne = require('../models/Personne')


const InterieursSchema = new mongoose.Schema({
    infraction: String,
    debut: Date,
    fin: Date,
    personne: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Personne"
    }

})

module.exports = mongoose.model('Interieurs', InterieursSchema)