import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({fileName , className}) => {
  
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  
  const fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName)
    .fluid
    console.log(fluid)

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={fluid}
    >
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(Image)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute !important;
  z-index: "-1";
  background-color: #ffeae7;
`

export default StyledBackgroundSection
