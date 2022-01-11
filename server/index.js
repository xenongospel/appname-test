import express from 'express'
import { hexToRgb, rgbToHex } from './convert-color.js'

const SERVER_PORT = 3000
const RGB_RADIX = 10

const app = express()

// ======================= Routes =======================
app.get('/rgbToHex', (req, res) => 
  res.send(rgbToHex(...Object.values(req.query).map((color) => parseInt(color, RGB_RADIX)))))

app.get('/hexToRgb', (req, res) => 
  res.send(JSON.stringify(hexToRgb(req.query.hex))))

console.log(`Started Server on Port ${SERVER_PORT}`)
app.listen(SERVER_PORT)