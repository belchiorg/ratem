import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose'
import router from './routes/router.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api/posts', router)


mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true
}).then(() => console.log("Successfully connected to MongoDB")).catch(err => console.log(err))

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})


