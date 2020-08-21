import "../style.css";
import React from "react";
import Banner from "../img/banner.jpg";
import Category from "./Category";


function Homepage() {
    return (
        <>
            <div className="main-banner">
                <img src={Banner} alt="banner" />
            </div>
            <div>
            <Category />
            </div>
        </>
    );
}


export default Homepage;