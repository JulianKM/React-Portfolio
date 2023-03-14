import React from "react";
import '../../styles/Style.css';
import Project from '../project';
import Movie from '../../styles/cinema-sips.png';

export default function Portfolio() {
    return (
        <div className='mainBody'>
        <h1 className="title">Portfolio</h1>
        <Project title="Sips & Cinema (group project)" pic={Movie} alt="Project Pic" details="Generate a random movie and drink of your choice." link="https://kawaikimono.github.io/Movies-n-Drinks/"/>
        <Project title="Tech Blog" details="Users can post their blogs and comment on others" link=" https://techblog-j.herokuapp.com/"/>
        </div>
    )
}