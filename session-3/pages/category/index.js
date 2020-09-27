import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import Navigation from "../../component/navigation";
import Link from "next/Link";

const CATEGORY_LIST = gql`
  {
    categoryList(filters: { ids: { } }) {
      id
      name
      url_key
      url_path
      display_mode
      children {
        id
        name
        url_key
        url_path
        display_mode
      }
    }
}
`;
const Category = () => {
  const response = useQuery(CATEGORY_LIST);
    
  const { loading, error, data } = response;
  
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }
  const category = data.categoryList;
  return (
    <Navigation>
      {/* <div className={styles.container}> */}
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="list-category">
          <h1>List Category</h1>
          <ul>
            {category.map((val, idx) => {
              return ( 
                <li className="list-item" key={idx}>
                  <Link href="/productList/[id]" as={`productList/${val.id}`}>
                    <a className="category-name">{val.name}</a>
                  </Link>
                </li>
                );
            })}
          </ul>
        </div>
      {/* </div> */}
    </Navigation>
  );
};
export default withApollo({ ssr: true }) (Category);