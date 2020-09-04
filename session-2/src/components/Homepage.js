import React from "react";
import Banner from "./Banner";
import ListingProduct from "./ListingProduct";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <>
            <div className="homepage-wrapper">
                <Banner />
                <ListingProduct category_id="1" />
                <Link className="view-more" to={`category/1`}>View More</Link>
                <ListingProduct category_id="2" />
                <Link className="view-more" to={`category/2`}>View More</Link>
            </div>
        </>
    );
}


export default Homepage;