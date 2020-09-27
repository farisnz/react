import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
// import Navigation from "../component/navigation";
import { withApollo } from "../../../lib/apollo";
import { validate } from "graphql";
import Link from "next/Link";

const HOME_PRODUCT = gql`
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
function HomeProduct() {
  const router = useRouter();
  const id = router.query.id;
  if (id) {
    const response = useQuery(HOME_PRODUCT, {
      variables: {
        category_id: "4",
      },
    });
    const { loading, error, data } = response;
    console.log(loading);
    console.log(data);
    if (data != null){
      const category = data.categoryList;
      const listing = data.categoryList[0].products.items;
      return ( 
        <>
          <div>
           {category.map((val, idx) => {
             return (
              <div key={idx}><b><h1>{val.name}</h1></b></div>
              );
           })}
          </div>
          <div>
           {listing.map((val, idx) => {
             return (
              <div key={idx}>
                <div>
                    <img src={val.small_image.url} />
                      <p>{val.name}</p>
                      <p>SKU : {val.sku}</p>
                      <p>{val.price_range.maximum_price.final_price.currency} {val.price_range.maximum_price.final_price.value}</p>
                      <Link href={`/product/${val.id}?category=${id}`} >
                      <button>Show Detail</button>
                    </Link>
                </div>
              </div>
             );
           })}
          </div>
        </>
      );
    }
  }
  return null;
};

export default withApollo({ ssr: true }) (HomeProduct);