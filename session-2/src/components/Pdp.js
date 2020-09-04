import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { productData } from "./Data";
import { useDispatch } from 'react-redux';
import { cart } from "../redux/action/cart";

function Pdp() {
    let query = new URLSearchParams(useLocation().search);
    const [count, setCount] = useState(1);

    const dispatch = useDispatch();
    const Addcart = (id) => {
        dispatch(
          cart({
            id: id,
            img: document.getElementById("img").src,
            name: document.getElementById("name").innerText,
            qty: parseInt(document.getElementById("qty").value),
            price: parseInt(document.getElementById("price").innerText)
          })
        )
      };


    return (
        <>
            {productData.map(data => (
                <div style={{width: "70%", margin: "3rem"}}>
                    {
                        data.products.map((products) => {
                            if (products.name === query.get("name")) {
                                return (
                                    <div key={products.id}>
                                        <div style={{display: "inline-block", width: "50%"}}>
                                            <img id="img" src={products.img} />
                                        </div>
                                        <div style={{display: "inline-block", width: "50%"}}>
                                            <h2 id="name">{query.get("name")}</h2>
                                            <p style={{display: "inline-block", fontWeight: "bold"}}>Rp.</p>
                                            <p style={{display: "inline-block", fontWeight: "bold"}} id="price">{products.price}</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dapibus sem, id rutrum est ullamcorper et. Morbi at nunc id urna suscipit pharetra. Morbi feugiat dui sit amet suscipit mattis. Nullam mollis velit ac nibh mollis posuere. Morbi cursus placerat ligula, in auctor velit egestas quis. Ut dapibus semper ipsum ac tempor. Duis et accumsan neque.</p>
                                            <button onClick={() => { if (count > 0) { setCount(count - 1) } }}>-</button>
                                            <input id="qty" style={{ width: '30px', display: 'inline-block', textAlign: 'center' }} type="text" min="0" value={count} readOnly />
                                            <button onClick={() => setCount(count + 1)}>+</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => { if (count > 0) { Addcart(products.id) }}}>Add To Cart</button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            ))}
        </>
    )
}

export default Pdp;