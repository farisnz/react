import React from "react";
import {Link} from "react-router-dom";
import '../style.css';

const products= [
    { id: "111", name: "Bags 1", price: "Rp.450.000", img: "/img/product.png"},
    { id: "222", name: "Bags 2", price: "Rp.675.000", img: "/img/product.png"},
    { id: "333", name: "Bags 3", price: "Rp.775.000", img: "/img/product.png"},
];

export default function ProductList() {
  return (
    <>
    {products.map((order, index) => (
        <div className="product-list" key={index}>
            <div className="product-item">
                <div className="product-image"><img src={order.img} alt="" /></div>
                <div className="product-info">
                    <div className="product-name">{order.name}</div>
                    <div className="price">{order.price}</div>
                    <div className="view"> <Link to={`/product?productNo=${order.id}&productName=${order.name}&productPrice=${order.price}&productImg=${order.img}`}>View Product</Link></div>
                </div>
            </div>
        </div>
    ))}
    </>
  );
}
