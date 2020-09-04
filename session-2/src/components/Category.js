import React from 'react';
import ListingProduct from "./ListingProduct";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";

function Category() {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/:id`}>
                <CategoryList />
            </Route>
        </Switch>
    )
}

function CategoryList() {
    let { id } = useParams();
    return (
        <>
            <div className="wrapper">
                <ListingProduct category_id={id}/>
            </div>
        </>
    )
}

export default Category;