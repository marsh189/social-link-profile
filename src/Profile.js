import { Bio } from './data'
import './Profile.css'

const Profile = () => {
  return (
    <div className="container">
      <img className="avatar" src={Bio.img} alt={Bio.name} />
      <h2 className="name">{Bio.name}</h2>
      <p className="location">{Bio.location}</p>
      <p className="desc">{Bio.description}</p>
      <div className="links">
        <a href={Bio.github} target="_blank">
          Github
        </a>
        <a href={Bio.frontend} target="_blank">
          Frontend Mentor
        </a>
        <a href={Bio.linkedIn} target="_blank">
          LinkedIn
        </a>
        <a href={Bio.twitter} target="_blank">
          Twitter
        </a>
        <a href={Bio.instagram} target="_blank">
          Instagram
        </a>
      </div>
    </div>
  )
}
export default Profile
