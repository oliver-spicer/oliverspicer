require('dotenv').config()

// Basic Requires 
const express     = require('express')
const app         = express()
const cors        = require('cors')

// Routers
const {
  contactRouter
} = require('./routes')

// E X P R E S S   C O N F I G U R A T I O N
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))

// C U S T O M   R O U T E S
app.use('/api/v1/contact/', contactRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});

