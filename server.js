const express = require('express')

const dotenv = require('dotenv')

// route files
const carRentals = require('./routes/carrentals')

// load env vars
dotenv.config({ path: './config/config.env' })

const app = express()

// mount routers
app.use('/api/v1/car-rentals', carRentals)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT} and ${process.env.NODE_ENV} mode`);
});