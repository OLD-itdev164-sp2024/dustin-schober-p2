import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <main>
      <p>Hello welcome to my living resume website. Take a look around and learn about my background
        and different projects I have worked on.
      </p>
    </main>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
    {
        allContentfulLanguages {
            edges {
                node {
                    id
                    name
                    slug
                }
            }
        }
    }
`