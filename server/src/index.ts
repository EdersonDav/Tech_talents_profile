import express from 'express'
import path from 'path'
import router from "./routers/router"
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")))

app.use(router)

app.listen(3333, () => {
  console.log("🚀Server Running");
})