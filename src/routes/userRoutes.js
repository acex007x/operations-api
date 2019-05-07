const express = require('express')
const router = express.Router()

const User = require('../models/userModel')

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send('unable to save user profile', err)
    }
})

router.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    }
    catch (err) {
        res.status(500).send('internal server error unable to fetch user profile')
    }
})

router.get('/user/:id', async (req, res) => {
    const _id = req.param.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send('no records found')
        }
        res.send(user)
    } catch (err) {
        res.status(500).send('internal server error')
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'age', 'password', 'email']
    const isValidOperation = updates.every((update) => allowedUpdates, includes(upadte))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Operation' })
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id)
        if (!user) {
            return res.status(404).send('there are no records to update')
        }
    } catch (err) {
        res.status(400).send(err)
    }
})

router.delete('/user/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send('no users found to delete')
        }
    } catch (err) {
        res.status(500).send()
    }
})

module.exports = router