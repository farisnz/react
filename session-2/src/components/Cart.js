import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
    const data = useSelector((state) => state.cart);
    const [datacart, setDataCart] = useState([]);
    useEffect(() => {
        const getData = () => {
            for (let key in data.cart) {
                setDataCart(prevArray => [...prevArray,
                {
                    img: data.cart[key].data.img,
                    name: data.cart[key].data.name,
                    qty: data.cart[key].data.qty,
                    price: data.cart[key].data.price
                },
                ]);
            }
        };
        getData();
    }, []);
    return (
        <>
            <div className="wrapper" style={{padding: "3rem"}}>
                <h2>Cart</h2>
                <table className="cart">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datacart.map((val, index) => (
                                <tr key={index}>
                                    <td style={{ width: '10%' }}><img style={{ maxWidth: '200px' }} src={val.img} /></td>
                                    <td style={{textAlign: "center"}}><Link to={`/product?name=${val.name}`}>{val.name}</Link></td>
                                    <td style={{textAlign: "center"}}><p style={{display: "inline"}}>Rp.</p>{val.price}</td>
                                    <td style={{textAlign: "center"}}>{val.qty}</td>
                                    <td style={{textAlign: "center"}}>{val.qty * val.price}</td>
                                </tr>
                            ))                               
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Cart;