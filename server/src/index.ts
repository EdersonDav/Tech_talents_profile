import express from 'express'
import path from 'path'
import multer from 'multer'
import multerConfig from './config/multer'

const app = express()

app.post("/user", multer(multerConfig).single('file'), (request, response) => {
  console.log(request.file)
  response.json({ name: request.file.filename })
})

app.get("/", (request, response) => {
  response.json({ message: "Hello, World" })
})

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")))

app.listen(3333, () => {
  console.log("🚀Server Running");
})