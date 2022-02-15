import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

class AboutIndex extends React.Component {
  render() {
    const [about] = get(this, 'props.data.allContentfulAbout.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="About" />
        <Hero
          title="About"
          content={about.body}
        />
      </Layout>
    )
  }
}

export default AboutIndex

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulAbout(sort: { fields: [title], order: DESC }) {
      nodes {
        title
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`