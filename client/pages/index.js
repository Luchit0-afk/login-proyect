import Head from 'next/head';
import Navigation from './../components/Navigator.js';

export default function Home() {
  return (
    <div >
      <Head>
        <title>All can view</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Main Page</h1>
      <p>Esta vista es accesible para todos</p>
      <Navigation/>
    </div>
  )
}
