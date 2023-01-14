import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from '../../src/styles/Home.module.css'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
          <main className={styles.main}>
            <div className={styles.container}>
              {children}
            </div>
          </main>
        <Footer />
    </div>
  )
}

export default Layout