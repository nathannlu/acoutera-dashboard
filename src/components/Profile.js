import React from 'react';
import Avatar from './Avatar'

const Profile = () => {
  return (
    <div className="hidden md:block absolute h-screen bg-white top-0 py-16 shadow-lg w-1/5 text-center">
    <Avatar />
    <ul className="w-1/2 mx-auto pt-12 text-left">
      <li className="py-2">
        <a href="#">Messages</a>
      </li>
      <li className="py-2">
        <a href="#">Contractors</a>
      </li>
      <li className="py-2">
        <a href="#">Settings</a>
      </li>
    </ul>
  </div>
  )
}

export default Profile;