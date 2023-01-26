import Axios from 'axios';
import Head from 'next/head';
import { useEffect } from 'react';
import { Button } from '../components/Button';

function Home({ props }) {
  function getData() {
    Axios.get('http://localhost:3000/api/hello').then((res) => {
      console.log(res.data);
    });
  }
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <Head>
        <title>setting-practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button label="ok"></Button>
      </div>
    </div>
  );
}

export default Home;
