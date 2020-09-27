import Head from 'next/head'
import Navigation from '../component/navigation';
import MyBanner from './banner';
import { withApollo } from '../lib/apollo';
import HomeProduct from '../component/core/HomeProduct';


function Home() {
  return (
    <Navigation>
      <Head>
        <title>Assignment 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MyBanner />
        <HomeProduct />
      </main>      
    </Navigation>
  );
}

export default withApollo({ ssr: true }) (Home);
