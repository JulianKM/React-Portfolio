import React from "react";
import '../../styles/Style.css';
import Project from '../project';
import Movie from '../../styles/cinema-sips.png';
import Clash from '../../styles/picsRus.png';

export default function Portfolio() {
    return (
        <div className='mainBody'>
        <h1 className="title">Portfolio</h1>
        <Project title="Sips & Cinema (group project)" pic={Movie} alt="Project Pic" details="Generate a random movie and drink of your choice." link="https://kawaikimono.github.io/Movies-n-Drinks/"/>
        <Project title="pics R us (group project)" pic={Clash} alt="Project Pic" details="Users can post/interact with pictures" link="https://picrus.netlify.app/?gallery=technology"/>
        </div>
    )
}
