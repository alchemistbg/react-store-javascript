import React from 'react';

function Logo() {
    return (
        <div className="site-logo">
            <img className="logo-img" src={"/static/images/logo.png"} alt="" />
            <div className="logo-wrapper">
                <h2 className="logo-text">Compass Shop</h2>
                <h6 className="logo-subtext">for DEDICATED fans</h6>
            </div>
        </div>
    )
}

export default Logo;