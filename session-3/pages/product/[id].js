import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import Navigation from "../../component/navigation";
import { withApollo } from "../../lib/apollo";
import { validate } from "graphql";
import Link from "next/Link";
import { addtoCart } from "../../redux/action/cart";
import { useDispatch} from "react-redux";
import React, { useState, Component, useEffect } from "react";


const PRODUCT_DETAILS = gql`
  query getProductId($product_id: String!) {
    products(filter: { category_id: { eq: $product_id } }) {
      total_count
      items {
        id
        name
        sku
        url_key
        description {
          html
        }
        small_image {
          url
          label
        }
        price_range {
          maximum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

const ProductIdPage = () => {
    const router = useRouter();
    const productId = router.query.id;
    const category = router.query.category;
    
    const dispatch = useDispatch();
    const handleAddToCart = (productId, productName, productImage, productPrice, productCurrency) => {
      dispatch(
        addtoCart({
          id : productId,
          name : productName,
          img : productImage,
          price : productPrice,
          qty : parseInt(document.getElementById("qty").value),
          currency: productCurrency 
        })
      );
    };
    
    if (category) {
        const response = useQuery(PRODUCT_DETAILS, {
            variables: { product_id: category,
            }
        });
        const { loading, error, data } = response;
        console.log(loading);
        console.log(data);

        if (data != null) {
        const productDetail = data.products;
            return (
                <Navigation>
                    <div className="product-detail">
                      {productDetail.items.map((val, idx) => {
                          if(router.query.id==`${val.id}`) {
                              return (
                                  <div key={idx}>
                                      <div className="product-image"> <img src={val.small_image.url} /> </div>
                                      <div className="detail-info"> 
                                          <p className="product-name">{val.name}</p>
                                          <p className="product-sku">SKU: {val.sku}</p>
                                          <p className="product-price">{val.price_range.maximum_price.final_price.currency} {val.price_range.maximum_price.final_price.value}</p>
                                          {/* <p>{val.description.html}</p> */}
                                          <div className="product-input-button">
                                              <input type="number" name="qty" min="1" max="5" className="qty" id="qty" defaultValue="1"/>
                                              <br />
                                              <button onClick={() => handleAddToCart
                                                (`${val.id}`, `${val.name}`, 
                                                `${val.small_image.url}`, `${val.price_range.maximum_price.final_price.value}`, 
                                                `${val.price_range.maximum_price.final_price.currency}`)}>
                                                  Add to Cart
                                              </button>
                                      </div>
                                      </div>
                                      <div className="product-desc"><b>Product Description</b><p dangerouslySetInnerHTML=
                                      {{__html: val.description.html}}>
                                      </p></div>                                          
                                  </div>
                              );
                          }                        
                      })}
                    </div>
                </Navigation>
            );
        }
    }
    return null;
};

export default withApollo({ ssr: true })(ProductIdPage);