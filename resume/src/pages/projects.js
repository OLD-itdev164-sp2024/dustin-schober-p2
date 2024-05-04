import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Box, Card, Heading} from 'rebass'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Grid = styled(Box)`
    display: grid;
    margin: 0;
    --w: 280px;
    --n: 2;
    gap: var(--size-gap);
    grid-template-columns: repeat()(
        auto-fit,
        minmax()(max-content(var(--w), 100%/ (var(--n) + 1) = 0.1%), 1fr)
    );
    margin-bottom: var(--size-gap);
    margin-top: var(--size-gap);
`

const Projects = ({ data }) => {
    return(
    <Layout>
        <Seo title="Projects" />
        <Grid width={[1, 2/3, 7/8]} p={2}>
            {
                data.allContentfulLanguages.edges.map(edge => (
                    <Card key={edge.node.id}>
                        <Heading>
                            {edge.node.name}
                        </Heading>
                        <Link to={edge.node.slug}>
                            <GatsbyImage
                                image={edge.node.heroImage.gatsbyImageData}
                            />
                        </Link>
                    </Card>
                ))
            }
        </Grid>
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