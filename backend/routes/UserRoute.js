const express = require('express');
const router = express.Router();
const User = require('../models/userModel');


// create users

router.post('/', async (req, res) => {
    const { name, email, age } = req.body;
    console.log(req.body);


    try {
        const UserAdd = await User.create({
            name: name,
            email: email,
            age: age
        });
        res.status(201).json(UserAdd);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})

// find all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }



})

// find user by id

router.get('/:id', async (req, res) => {

    const id = req.params.id;
    try {
        const SearchUser = await User.findById(id);
        res.status(200).json(SearchUser);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})

// delete user by id 

router.delete('/:id', async (req, res) => {

    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ "message": 'User deleted successfully' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
// update user patch

router.patch('/:id', async (req, res) => {

    const id = req.params.id;
    const body = req.body;
    try {
        const UpdateUser = await User.findByIdAndUpdate(id, body, { new: true });
        res.status(200).json(UpdateUser);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})


// marks create 

router.patch('/marks/:id', async (req, res) => {
    const id = req.params.id;
    const { marks } = req.body;
    try {
        const AddMarks = await User.findByIdAndUpdate(id, { marks: marks }, { new: true });
        res.status(200).json(AddMarks);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})


// find all marks



module.exports = router;