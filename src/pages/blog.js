import React from "react"
import Layout from "../layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../layout/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            title
            slug
            createdAt(formatString: "MMMM Do YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.createdAt}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
