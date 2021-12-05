const express = require('express')

const dotenv = require('dotenv')

// load env vars
dotenv.config({ path: './config/config.env' })

const app = express()

app.get('/api/v1/car-rentals', (req, res) => {
  res.status(200).json({ success: true, message: 'Show all car rentals available success' })
})

app.get('/api/v1/car-rentals/:id', (req, res) => {
  res.status(200).json({ success: true, message: `show car rental with id ${req.params.id} successfully'` })
})

app.post('/api/v1/car-rentals', (req, res) => {
  res.status(200).json({ success: true, message: 'create car rental success' })
})

app.put('/api/v1/car-rentals/:id', (req, res) => {
  res.status(200).json({ success: true, message: `update car rental with id ${req.params.id} successfully'` })
})

app.delete('/api/v1/car-rentals/:id', (req, res) => {
  res.status(200).json({ success: true, message: `delete car rental with id ${req.params.id} successfully'` })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT} and ${process.env.NODE_ENV} mode`);
});