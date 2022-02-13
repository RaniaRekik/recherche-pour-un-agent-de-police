const mongoose = require('mongoose')


const PersonneSchema = new mongoose.Schema({
	cin: Number,
    nom: String,
    prenom: String,
    naissance: Date,
    lieu: String,

   /*  financesSessions: [new mongoose.Schema({
        finances: { type: mongoose.Schema.Types.ObjectId, ref: 'Finances' },
        duree: Number,
        description: String,
      
    }, { _id: false })], */
   finances: [{ type: mongoose.Schema.Types.Object, ref: 'Finances' }],
   interieurs: [{ type: mongoose.Schema.Types.Object, ref: 'Interieurs' }],
    thumbnail: String,

  
   
}, {
    toJSON: {
        virtuals: true
    }
});


PersonneSchema.virtual("thumbnail_url").get(function () { return `http://localhost:8000/files/${this.thumbnail}` })

module.exports = mongoose.model('Personne', PersonneSchema)