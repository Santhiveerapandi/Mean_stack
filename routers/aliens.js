const express = require('express');
const route = express.Router();
const Alien = require("../models/alien");
const { request } = require('express');
route.get('/', async (req, res) => {
    // console.log('GET Request...');
    // res.send("GET Request Response");
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch(err) {
        res.send('Error '+err);
    }
});

route.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch(err) {
        res.send('Error '+err);
    }
});

route.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1= await alien.save();

        res.json(a1);
    } catch(err) {
        res.send('Error '+err);
    }
});
//ObjectId("5f180a60e6d14a2a5c9ed0df")
route.delete('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        const a1= await alien.remove();
        res.json(req.params.id+ " is Deleted Successfully..");
        
    } catch(err) {
        res.send('Error '+err);
    }
});
route.post('/', async (req, res) => {
    try {
        const alien = new Alien({
            name: req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
        });
        const a1 = await alien.save();
        res.json(a1);
    } catch(err) {
        res.send('Error '+err);
    }
});
module.exports = route;