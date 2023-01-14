import Image from 'next/image'
import styles from '../src/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
        <h1 className={styles.title}>
          Welcome To My Blog!
        </h1>
        <div>
          <p>You&apos;ve found my blog! Welcome. Make yourself at home. Please take a look at my <Link href="/blog"><a className={styles.link}>latest blog posts</a></Link>.</p>
        </div>
    </>
  )
}
