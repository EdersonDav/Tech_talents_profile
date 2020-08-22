import express from 'express'
import multer from 'multer'
import multerConfig from '../config/multer'
import CreatedProfile from '../services/CreatedProfile'
import { v4 } from 'uuid'
import InterfaceProfile from '../services/InterfaseProfile'

const router = express.Router()

const usersProfile: InterfaceProfile[] = []

router.post("/profileImage/:id", multer(multerConfig).single('file'), (request, response) => {
  const image = `http://localhost:3333/uploads/${request.file.filename}`
  const { id } = request.params

  usersProfile.map(profile => {
    if (profile.id === id) {
      profile.image = image
    }
  })
  response.json(usersProfile)
})

router.post("/profile", (request, response) => {
  const { firstName, lastName, age, phone, country, city, estates, techs, stars } = request.body

  const newProfile = CreatedProfile({
    id: v4(),
    firstName,
    lastName,
    age,
    phone,
    city,
    country,
    estates,
    techs,
    stars: 0
  })
  response.json(newProfile)
  usersProfile.push(newProfile)
})

router.get("/", (request, response) => {
  response.json(usersProfile)
})

export default router