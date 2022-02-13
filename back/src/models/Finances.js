const mongoose = require('mongoose')
const Personne = require('../models/Personne')


const FinancesSchema = new mongoose.Schema({
    infraction: String,
    date: Date,
    deadline: Date,
    paye: Boolean,
    personne: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Personne"
    }

})
/*   
}, {
    toJSON: {
        virtuals: true
    }
});
*/

module.exports = mongoose.model('Finances', FinancesSchema)