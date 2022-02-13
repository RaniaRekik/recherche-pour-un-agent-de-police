const express = require('express')
const mongoose = require('mongoose')
const Personne = require('../models/Personne')
const Finances = require('../models/Finances')

module.exports = {
   async createPersonne(req, res) {

        try {
            const { cin, nom, prenom, naissance, lieu } = req.body;
            const { filename } = req.file;
            const personne = await Personne.create({
                cin,
                nom,
                prenom,
                naissance,
                lieu,
                thumbnail: filename
            });
            return res.json(personne);
        }
        catch (err) {
            next(err);
        }


    },

    async getAllPersonnes(req, res) {
        try {
            const personnes = await Personne.find().sort({ _id: -1 })

            if (personnes) {
                return res.json(personnes)
            }
        } catch (error) {
            return res.status(400).json({ message: "Il n'ya aucun personnes" })
        }
    },
    async delete(req, res) {
        const { personneId } = req.params;
        try {
            await Personne.findByIdAndDelete(personneId)
            return res.status(204).send()

        } catch (error) {
            return res.status(400).json({ message: 'Aucune personne avec cette ID' })
        }
    },

    async updatePersonneId(req, res) {
        const { id } = req.params;
        const {  cin, nom, prenom, naissance, lieu } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No person with id: ${id}`);

        const updatePersonne = { cin, nom, prenom, naissance, lieu };

        await Personne.findByIdAndUpdate(id, updatePersonne, { new: true });

        res.json(updatePersonne);
    },

    async getUserById(req, res) {
		const { userId } = req.params

		try {
			const user = await Personne.findById(userId)
			return res.json(user)
		} catch (error) {
			return res.status(400).json({
				message:
					'User ID does not exist, do you want to register instead?',
			})
		}
	},



 
async getPersonneById(req, res) {
    const { id } = req.params

    try {
        const personne = await Personne.findOne({_id:  id})
        return res.json(personne)
    } catch (error) {
        return res.status(400).json({
            message:
                'hmm Person ID does not exist?',
        })
    }
},

async getPersonneByCin(req, res) {
    const { cin } = req.params

    try {
      const personne = await Personne.findOne({cin: cin })
     // const personne = await Personne.findOne(cin)
     const leid = personne._id

     console.log("leid", leid)
   // const fin = await Finances.findOne({personne: leid })
    /* if (fin) {
        console.log('fin', fin);
        return res.json(personne).populate('Finances')
    }  */
    return res.json(personne)
    //.populate('Finances', ['_id', 'duree'] );
 
      // else  return res.json(personne)
       
        //if Finances
    } catch (error) {
        return res.send("no");
        /*res.status(400).json({
            message:
                'Person ID does not exist?',
        })*/
    }
}

}