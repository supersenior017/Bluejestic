import { User } from 'src/types'

const AboutMe: React.FC<{ currentUser: User }> = ({
  currentUser: { address, bday, events, jobTitle, joined, gender, relationshipStatus, website, about },
}) => {
  return (
    <div className="user-profile-about-wrapper">
      <div className="user-profile-title-wrapper">
        <h5>About Me:</h5>
        <img src="/assets/img/user-profile/edit-icon.svg" />
      </div>
      <div className="user-profile-content">
        <p>{about}</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <img src="/assets/img/user-profile/fb.svg" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <img src="/assets/img/user-profile/twit.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src="/assets/img/user-profile/insta.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <img src="/assets/img/user-profile/linkedin.svg" />
            </a>
          </li>
        </ul>
      </div>
      <div className="user-about-content">
        <ul>
          <li>
            <p>Followed Stores:</p>
            <span>68</span>
          </li>
          <li>
            <p>Birthday:</p>
            <span>{bday}</span>
          </li>
          <li>
            <p>Lives In:</p>
            <span>{address}</span>
          </li>
          <li>
            <p>Events:</p>
            <span>{events}</span>
          </li>
          <li>
            <p>Occupation:</p>
            <span>{jobTitle}</span>
          </li>
          <li>
            <p>Joined:</p>
            <span>{joined}</span>
          </li>
          <li>
            <p>Gender:</p>
            <span>{gender}</span>
          </li>
          <li>
            <p>Status:</p>
            <span>{relationshipStatus}</span>
          </li>
          <li>
            <p>Website:</p>
            <span>{website}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
