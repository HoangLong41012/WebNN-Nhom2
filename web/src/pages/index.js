import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { handleDirectToSmartDevice } from '../utils/Redirect';
import { useEffect } from 'react';
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    handleDirectToSmartDevice(router);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta charSet="UTF-8" key="charset" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
    </>
  )
}
