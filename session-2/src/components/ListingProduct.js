import React from 'react';
import { productData } from './Data';
import { Link } from 'react-router-dom';


function ListingProduct(props) {
    return (
        <>
            {productData.map(data => {
                if (data.category_id === props.category_id) {
                    return (
                        <div className="wrapper-listing"> 
                            <h2>{data.category_name}</h2>
                            <div className="product-list">
                                {data.products.map((products) => (                                   
                                       <Link to={`/product?name=${products.name}`}>
                                       <img src={products.img} />
                                       <p>{products.name}</p>
                                       <p>Rp.{products.price}</p>
                                       </Link>                                  
                                ))                                
                                }
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}
export default ListingProduct;