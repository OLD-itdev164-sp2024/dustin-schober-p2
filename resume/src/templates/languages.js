import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Languages = ({ data }) => {
    const { name, body } = data.contentfulLanguages;

    return (
        <Layout>
            <h1>{name}</h1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    );
}

export default Languages

export const pageQuery = graphql`
    query LanguagesQuery($slug: String!) {
        contentfulLanguages(slug: {eq: $slug}) {
            name
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`