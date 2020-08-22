import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import default_user from '../../img/default_user.png'
import './styles.css'
interface InterfaceProfile {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  phone: number;
  country: string;
  city: string;
  estates: string;
  techs: string[];
  image?: string;
  stars: number
}
const Home = () => {
  const [profiles, setProfiles] = useState<InterfaceProfile[]>([])

  useEffect(() => {
    api.get("/").then(response => {
      setProfiles(response.data);
    })

  }, [])

  return (
    <div className="container">
      <h1>Technology Professionals</h1>
      <ul className="card">{profiles.map(profile => (
        <li className="cards" key={profile.id}>
          <div className="header">
            <h2>{profile.firstName} {profile.lastName}</h2>
            <span>Stars: {profile.stars}</span>
          </div>
          <div className="body">
            <div className="imgAndBtnStars">
              {profile.image !== '' ?
                <img src={profile.image} alt={profile.firstName} width={100}></img>
                :
                <img src={default_user} alt={profile.firstName} width={100}></img>
              }
              <button>Add stars</button>
            </div>
            <div className="info">
              <div>
                <span>Age: {profile.age}</span>
                <span>Phone: {profile.phone}</span>
              </div>
              <div>
                <span>Country: {profile.country}</span>
                <span>Estate: {profile.estates}</span>
              </div>
              <div><span>City: {profile.city}</span></div>
              <ul className="techs">
                <span>Techs:</span>
                {profile.techs.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}</ul>
    </div>
  )
}
export default Home