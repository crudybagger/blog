import React from 'react'
import SocialBar from './SocialBar'
import '../stylesheets/ProfileShort.css'
function ProfileShort() {
  return (
    <div id='profile-short'>
        <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3fde73c38faef18e5434cf9455ec5a40.cdn.bubble.io%2Ff1688338162809x315804462847244000%2FSAVE_20200324_164001.jpg?w=256&h=256&auto=enhance&dpr=1&fit=facearea&facepad=8&q=100&fm=png" alt="" id='profile-pic'/>
        <p id='description'>
            I am Sarang Nagpal, a software developer from India. I am a full stack developer currently working on a website to record devlogs.
        </p>
        <SocialBar />
    </div>
  )
}

export default ProfileShort