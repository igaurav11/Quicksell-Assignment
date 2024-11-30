import React from 'react';
import "./Profile.css"

const userImages = {
    "Anoop sharma": "/images/user-1.jpg",
    "Yogesh": "/images/user-2.jpg",
    "Shankar Kumar": "/images/user-3.jpg",
    "Suresh": "/images/user-4.jpg",
    "Ramesh": "/images/user-5.jpg",
};

const Profile = ({ name, activityStatus }) => {
    const imageSrc = userImages[name] || "/images/user-1.jpg";

    return (
        <div className='usericon-container'>
            <div className='usericon'>
                <img src={imageSrc} alt={name} className="user-image" />
            </div>
            <div className={`user-status ${activityStatus && "available"}`}></div>
        </div>
    )
}

export default Profile
