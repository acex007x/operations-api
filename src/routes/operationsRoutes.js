const express = require('express')
const Operation = require('../models/operationsModel')
const router = new express.Router()

router.post('/', async (req, res) => {
    const operation = new Operation(req.body)

    try {
        await operation.save()
        res.status(201).send(operation)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/', async (req, res) => {
    try {
        const operations = await Operation.find({})
        res.send(operations)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const operation = await Operation.findById(_id)

        if (!operation) {
            return res.status(404).send()
        }

        res.send(operation)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const operation = await Operation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!operation) {
            return res.status(404).send()
        }

        res.send(operation)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const operation = await Operation.findByIdAndDelete(req.params.id)

        if (!operation) {
            res.status(404).send()
        }

        res.send(operation)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router