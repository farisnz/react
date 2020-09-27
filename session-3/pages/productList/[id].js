import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import Navigation from "../../component/navigation";
import { withApollo } from "../../lib/apollo";
import { validate } from "graphql";
import Link from "next/Link";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  buttonStyle: {
    color: "white",
    backgroundColor: "red",
    cursor: "pointer"
  }
})

const PRODUCT_LIST = gql`
  query getProductCategory($category_id: String!) {
    categoryList(filters: { ids: { eq: $category_id } }) {
      name
      description
      products(pageSize: 10) {
        items {
          id
          name
          sku
          url_key
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
  }
`;
const productList = () => {
  const router = useRouter();
  const id = router.query.id;
  const styles = useStyles;
  if (id) {
    const response = useQuery(PRODUCT_LIST, {
      variables: {
        category_id: id,
      },
    });
    const { loading, error, data } = response;
    console.log(loading);
    console.log(data);
    if (data != null){
      const category = data.categoryList;
      const listing = data.categoryList[0].products.items;
      return ( 
        <Navigation>
          <div className="list-product">
            <div className="category-name"> 
            {category.map((val, idx) => {
              return (
                <div key={idx}><b><h1>{val.name}</h1></b></div>
                );
            })}
            </div>
            <div className="product-info">
            {listing.map((val, idx) => {
              return (
                <div className="product-item" key={idx}>
                  <div className="product-info-item">
                      <img src={val.small_image.url} />
                        <p>{val.name}</p>
                        <p>SKU : {val.sku}</p>
                        <p>{val.price_range.maximum_price.final_price.currency} {val.price_range.maximum_price.final_price.value}</p>
                        <Link href={`/product/${val.id}?category=${id}`} >
                        <button className={styles.buttonStyle}>Show Detail</button>
                      </Link>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </Navigation>
      );
    }
  }
  return null;
};

export default withApollo({ ssr: true }) (productList);