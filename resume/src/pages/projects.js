import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { List, ListItem } from '../components/List'
import * as styles from "../components/index.module.css"

const Projects = ({ data }) => {
    return(
    <Layout>
        <Seo title="Projects" />
        <List width={[1, 2/3, 7/8]} p={2}>
            {
                data.allContentfulLanguages.edges.map(edge => (
                    <ListItem p={3} key={edge.node.id}>
                        <Link to={edge.node.slug}>{edge.node.name}</Link>
                        <div>
                            <GatsbyImage
                                image={edge.node.heroImage.gatsbyImageData}
                            />
                        </div>
                    </ListItem>
                ))

            }
        </List>
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
                    body {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                    heroImage {
                        gatsbyImageData(
                            layout: CONSTRAINED,
                            placeholder: BLURRED,
                            width: 600
                        )
                    }
                }
            }
        }
}
`