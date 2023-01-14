import BlogPostList from "../src/components/BlogPostList"

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return {
    props: { posts: data },
  }
}

const Blog = ({posts}) => {

  return (
    <BlogPostList posts={posts} />
  )
}

export default Blog