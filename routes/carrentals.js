const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Show all car rentals available success' })
})

router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `show car rental with id ${req.params.id} successfully'` })
})

router.post('/', (req, res) => {
  res.status(200).json({ success: true, message: 'create car rental success' })
})

router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `update car rental with id ${req.params.id} successfully'` })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `delete car rental with id ${req.params.id} successfully'` })
})

module.exports = router