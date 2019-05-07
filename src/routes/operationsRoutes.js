const express = require('express')
const router = express.Router()

const Operation = require('../models/operationsModel')

router.post('/operation', async (req, res) => {
    let operation = new Operation(req.body)
    try {
        operation = await operation.save()
        res.status(201).send(operation)
    } catch (err) {
        res.status(400).send(err)
    }
})
router.get('/operation', async (req, res) => {
    try {
        const operation = await Operation.find({})
        res.send(operation)
    } catch (err) {
        res.status(500).send(err)

    }
})
router.get('/operation/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const operation = await Operation.findById(_id)
        if (!operation) {
            return res.status(404).send('no records found')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})
router.patch('/operation/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['task', 'description', 'completed']
    const isValidOperaion = updates.every((update) => {
        allowedUpdates.includes(update)
        if (!isValidOperaion) {
            return res.status(404).send({
                error: 'Invalid operation'
            })
        }
    })
    try {
        const operation = await Operation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!operation) {
            return res.status(404).send('no operation availiable')
        }
        res.send(operation)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.delete('/operation/:id', async (req, res) => {
    try {
        const operation = await Operation.findByIdAndDelete(req.params.id)
        if (!operation) {
            res.status(404).send('no record available to delete')
        }
    } catch (err) {
        res.status(500).send(err)

    }
})