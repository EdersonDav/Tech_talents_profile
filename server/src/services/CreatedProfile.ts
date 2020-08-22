import InterfaceProfile from './InterfaseProfile'

export default function CreatedProfile({ id, fistName, lastName, age, phone, country, city, estates, techs, image = '' }: InterfaceProfile) {
  const profile = {
    id,
    fistName,
    lastName,
    age,
    phone,
    country,
    city,
    estates,
    techs,
    image
  }
  return profile
}