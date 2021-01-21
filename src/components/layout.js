/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createMuiTheme, ThemeProvider } from "@material-ui/core";


import "./layout.css"
import Background from "../images/Background.PNG"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = createMuiTheme({
    palette: {
      green: {
        main: "#C6DDCD", // This is an main color of all
      },
      blue: {
        main: "#C8D6D7", // secondary color for buttons etc
      },
      pink: {
        main: "#FFD3CE", // secondary color for buttons etc
      },
      yellow: {
        main: "#FEDBB1", // secondary color for buttons etc
      },
      white: {
        main: "#FEF3DD", // secondary color for buttons etc
      },
    },
    //fontFamily: font // for the font family to whole application
  });


  return (
    <>
    <div style={{height: '100%'}}>
        <main style={{height: '100%'}}>{children}</main>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
