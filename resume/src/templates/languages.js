import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Languages = ({ data }) => {
    const { name } = data.contentfulLanguages;

    return (
        <Layout>
            <h1>{name}</h1>
        </Layout>
    )
}

export default Languages

export const pageQuery = graphql`
    query LanguagesQuery($slug: String!) {
        contentfulLanguages(slug: {eq: $slug}) {
            name
            slug
        }
    }
`