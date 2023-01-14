import Link from 'next/link'
import styles from '../styles/BlogList.module.css'

const BlogPostList = ({posts}) => {
  return (
    <div>
        <h1 className={styles.title}>Blog post list</h1>
        <ul>
          {
            posts.map(({id, title}) => (
              <li key={id} className={styles.itemCard}>
                <Link href={`/blog/${id}`}>
                  <a className={styles.itemAnchor}>{title}</a>
                </Link>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default BlogPostList