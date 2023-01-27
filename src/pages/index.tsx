import Head from 'next/head';
import { Nav } from '../components/Nav';

function Home({ props }) {
  return (
    <div>
      <Head>
        <title>setting-practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav></Nav>
      </div>
    </div>
  );
}

export default Home;
