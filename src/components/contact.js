import React from 'react';
import './contact.css';

function Contact () {
    const avatar = "https://randomuser.me/api/portraits/women/7.jpg"
    const name = "stephanie"
    const online = true
    return (
    <div className="Contact">

        <div >
            <img className="avatar"src={avatar}></img>
        </div>

        <div className="name">
              {name}

        </div>

        <div className="status">
            <div className =  {online ? "status-online" : "status-offline" } ></div>
            <div className="status-text">
                {online ? "Online" : "offline"}

            </div>

        </div>
    </div>
    )}

export default Contact;