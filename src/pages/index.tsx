import Head from 'next/head';
import { LayOut } from '../components/layout';

function Home({ props }) {
  return (
    <LayOut>
      <div
        style={{
          width: '100%',
          height: '100vw',
          backgroundColor: 'black',
          backgroundImage: 'url(./main_background.svg)',
          backgroundRepeat: ' no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'right top',
        }}>
        <Head>
          <title>setting-practice</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div></div>
      </div>
    </LayOut>
  );
}

export default Home;
