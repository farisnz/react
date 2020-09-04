import "../style.css";
import React from "react";
import Banner from "../img/banner.png";

function MainBanner () {
    return (
        <>
            <div className="main-banner">
                <img src={Banner} alt="banner" />
            </div>
        </>
    );
}


export default MainBanner;