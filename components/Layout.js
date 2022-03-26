import Head from 'next/head'
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name='keywords' content='nextjs' />
        <title>Init | Next JS</title>
      </Head>
      <Navbar />
      <div className="container">
        { children }
      </div>
    </>
  )
}
