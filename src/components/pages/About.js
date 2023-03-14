import React from "react";
import '../../styles/Style.css';
import ProfilePic from '../../styles/ProfilePic.jpg';

export default function About() {
    return (
        <div className='mainBody'>
        <h1 className="title">About</h1>
        <div className="flex flexME2">
        <img className="profilePic" src={ProfilePic} alt="Profile Pic" />
        <p className='bold'></p>
        </div>
        </div>
    )
}