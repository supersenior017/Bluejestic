import React from 'react'

const FriendsHero = () => {
  return (
    <div className="friends-banner">
      <div className="friends-banner-image">
        <img src="/assets/img/friends/friends-banner.png" />
      </div>
      <div className="friends-banner-text">
        <h2>Rose Marie</h2>
        <p>
          You have <span className="highlight">2 surveys</span> to be answered.{' '}
        </p>
        <p>don’t dissapoint your friends! </p>
      </div>
    </div>
  )
}

export default FriendsHero
