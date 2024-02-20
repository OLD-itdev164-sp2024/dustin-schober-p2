import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Projects = ({ data }) => {
    return(
    <Layout>
        <Seo title="Projects" />
        <ul className={styles.list}>
            {
                data.allContentfulLanguages.edges.map(edge => (
                    <li key={edge.node.id}>
                        <Link to={edge.node.slug}>{edge.node.name}</Link>
                        <div>
                            <GatsbyImage
                                image={edge.node.heroImage.gatsbyImageData}
                            />
                        </div>
                    </li>
                ))

            }
        </ul>
    </Layout>
    )
}

export default Projects

export const query = graphql`
    {
        allContentfulLanguages {
            edges {
                node {
                    id
                    name
                    slug
                    heroImage {
                        gatsbyImageData(
                            layout: CONSTRAINED,
                            placeholder: BLURRED,
                            width: 300
                        )
                    }
                }
            }
        }
}
`