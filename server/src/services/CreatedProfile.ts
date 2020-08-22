import InterfaceProfile from './InterfaseProfile'

export default function CreatedProfile({ id, firstName, lastName, age, phone, country, city, estates, techs, image = '', stars = 0 }: InterfaceProfile) {
  const profile = {
    id,
    firstName,
    lastName,
    age,
    phone,
    country,
    city,
    estates,
    techs,
    image,
    stars
  }
  return profile
}