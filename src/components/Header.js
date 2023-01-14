import Head from 'next/head'
import Nav from './Nav'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {

  return (
    <header className={styles.header}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My fantastic blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/logo.png" alt="My Blog" height={50} width={100} />
      <Nav />
    </header>
  )
}

export default Header