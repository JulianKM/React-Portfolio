import React from "react";
import '../../styles/Style.css';

export default function Contact() {
    return (
        <div className='mainBody'>
        <h1 className="title">Contact</h1>
        <form className="flexME">
        <label className="bolder" for="Name">Name</label>
        <input className="bolder" type="text" name="Name" ></input>
        <label className="bolder" for="fname">Email</label>
        <input className="bolder" type="text" name="Email" />
        <label className="bolder" for="fname">Message</label>
        <input className="bolder" type="text" name="Message" />
        <button className="bolder" type="submit">Submit</button>
        </form>
        </div>
    )
}