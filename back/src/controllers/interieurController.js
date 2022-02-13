const express = require('express')
const mongoose = require('mongoose')
const Finances = require('../models/Finances')
const Interieur = require('../models/Interieurs')
const Personne = require('../models/Personne')
const PersonneC = require('./personneController')


module.exports = {


    async createInterieur(req, res) {

        try {        
                    
              const { userId } = req.params;
         
              
                    const { infraction, debut, fin } = req.body;
                    console.log("userId",userId);
                
                 const user = await Personne.findById((userId).trim()  )
               
                console.log("user",user);
               
                    if (!user) {
                        return res.status(400).json({ message: 'Person does not exist!' })
                    }

                const interieur = new Interieur(req.body);
                // book.publisher = publisher._id; <=== Assign user id from signed in publisher to publisher key
                await interieur.save();
                user.interieurs.push(interieur);
                
                await user.save();
                return res.json(interieur);
                   
                }
                catch (err) {       
        console.log('===>errrr', err);
                    return res.status(400).json({ message: "err" })
                }
        
        
            },


    async getAllInterieur(req, res) {
        try {
            const personnes = await Interieur.find().sort({ _id: -1 })

            if (personnes) {
                return res.json(personnes)
            }
        } catch (error) {
            return res.status(400).json({ message: "Il n'ya aucune personnes" })
        }
    },

    async getInterieurById (req, res) {
        const { cin } = req.params;
        
    try {
        const user = await Personne.findOne({cin: cin })

        if (!user) {
            return res.status(400).json({ message: 'Person does not exist!' })
        }

        const interieurs = await Interieur.findById(user._id)

        if (interieurs) {
            return res.json(interieurs)
        }
    } catch (error) {
        return res.status(400).json({ message: 'EventId does not exist!' })
    }

    }
}