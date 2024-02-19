import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const About = ({ data }) => {
    const { location } = data.site.siteMetadata.contact
    return(
        <Layout>
            <Seo title="About Us" />
            <h1>About Me</h1>
            <p>I am a soon to be IT web development and programming graduate from {location}. I aim to use my information technology skills
                to help businesses meet their goals and objectives in a timely manner.</p>
            <h2>Education</h2>
            <div style={{marginBottom: `2.5rem`}}>
                <p style={{ margin:`0.25rem`}}>Associate's degree in IT Web Development and Programming </p>
                <p style={{ margin:`0`}}>Milwaukee Area Technical College - Milwaukee, WI </p>
                <p>January 2022 to Present</p>
            </div>
            <div style={{marginBottom: `2.5rem`}}>
                <p style={{ margin:`0.25rem`}}>Associate's degree in Automotive Technology</p>
                <p style={{ margin:`0`}}>Gateway Technical College - Racine, WI</p>
                <p>September 2010 to June 2012</p>
            </div>
            <div style={{marginBottom: `2.5rem`}}>
                <p style={{ margin:`0.25rem`}}>High school diploma </p>
                <p style={{ margin:`0`}}>Case High School - Racine,WI</p> 
                <p>September 2004 to June 2008</p>
            </div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <StaticImage
                    src="../images/gatsby-icon.png"
                    width={300}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby resume"
                    style={{ marginBottom: `1.45rem`}}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
    query {
        site {
            siteMetadata{
                contact{
                    name
                    email
                    location
                }
            }
        }
    }
`