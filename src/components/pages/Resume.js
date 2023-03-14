import React from "react";
import '../../styles/Style.css';

const resumeLink="https://docs.google.com/document/d/1nG_xtSaUcnmUuAGVV9h73M8A1G5Xs2z5/edit?usp=sharing&ouid=111172158833712163268&rtpof=true&sd=true"

export default function Resume() {
    return (
      <div style={styles.container}>
        <h1>Resume</h1>
        <br></br>
        <ul>
        <h3>Click here to <a href={resumeLink} target='__blank'>download</a> my resume.</h3>
        </ul>
       <br></br>
       <ul>
        <h3>Developer's proficiencies</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>MySql</li>
       </ul>
      </div>
    );
  }
