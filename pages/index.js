import Head from 'next/head';
import Password from '../components/password/index';

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Head>
        <title>Password Generator</title>
      </Head>
      <Password />
    </div>
  );
}
