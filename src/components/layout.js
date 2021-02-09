/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import ReactGA from 'react-ga';

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

  useEffect(() => {
    ReactGA.initialize('UA-188519923-1');
    ReactGA.pageview(window.location.pathname)
  }, [])

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
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 10,
      fontFamily: `'Courier Prime', monospace` // for the font family to whole application
    },
  });


  return (
    <>
    <ThemeProvider theme={theme}>
    <div style={{height: '100%'}}>
        <main style={{height: '100%'}}>{children}</main>
    </div>
    </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
