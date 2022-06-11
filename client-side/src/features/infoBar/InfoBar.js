import React from 'react';
import './infobar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png'; 

const InfoBar = ( {room} ) => {

    return (
        <div className="info-bar">
            <div className="left-inner-container">
                <img className="online-icon" src={onlineIcon} alt="online icon"/>
                <h3>{room}</h3>
            </div>
            <div className="right-inner-container" >
                <a href="/"><img style={{background: "red"}} src={closeIcon} alt="close icon"/></a>
            </div>
        </div>
    )

}


export default InfoBar