const express = require('express')
const mongoose = require('mongoose')
const Finances = require('../models/Finances')
const Personne = require('../models/Personne')
const PersonneC = require('./personneController')


module.exports = {
 /* async createFinances(req, res) {

try {        
            const { duree, description } = req.body;
            const { cin } = req.params;

            //const user = await PersonneC.getPersonneById(cin);

            const user = await Personne.findOne({cin: cin })

            if (!user) {
                return res.status(400).json({ message: 'Person does not exist!' })
            }
          
            const finances = await Finances.create({
                duree,
                description,
                personne: user._id
            });
            return res.json(finances);
        }
        catch (err) {       

            return res.status(400).json({ message: "err" })
        }


    }, */

    async createFinances(req, res) {

        try {        
                    
              const { userId } = req.params;
         
              
                    const { infraction, date, deadline, paye } = req.body;
                    console.log("userId",userId);
                
                 const user = await Personne.findById((userId).trim()  )
               
                console.log("user",user);
               
                    if (!user) {
                        return res.status(400).json({ message: 'Person does not exist!' })
                    }
                   // const publisher = await Publisher.findById({_id: book.publisher})
                   


                 /*    const finance = await Finances.create({
                        duree,
                        description,
                      
                       personne: user._id
                       
                    }); */
                  //  let fin = finances.save();
                 // person.friends.push(friend);
                 // person.save(done);

                /*  user.update(
                    { _id: user._id }, 
                    { $push: {finances: finance } },
                    done
                ); */
                const finance = new Finances(req.body);
                // book.publisher = publisher._id; <=== Assign user id from signed in publisher to publisher key
                await finance.save();
                user.finances.push(finance);
                
                await user.save();
                return res.json(finance);
                   
                }
                catch (err) {       
        console.log('===>errrr', err);
                    return res.status(400).json({ message: "err" })
                }
        
        
            },


    async getAllFinances(req, res) {
        try {
            const personnes = await Finances.find().sort({ _id: -1 })

            if (personnes) {
                return res.json(personnes)
            }
        } catch (error) {
            return res.status(400).json({ message: "Il n'ya aucune personnes" })
        }
    },

    async getFinancesById (req, res) {
        const { cin } = req.params;
        
    try {
        const user = await Personne.findOne({cin: cin })

        if (!user) {
            return res.status(400).json({ message: 'Person does not exist!' })
        }

        const finances = await Finances.findById(user._id)

        if (finances) {
            return res.json(finances)
        }
    } catch (error) {
        return res.status(400).json({ message: 'EventId does not exist!' })
    }

    }
}