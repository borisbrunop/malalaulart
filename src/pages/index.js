import React from "react"
import { Link } from "gatsby"
import "./custom.css"

import Layout from "../components/layout"
import Background from "../images/Background.PNG"
import Logo from "../images/logoB.PNG"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Image from "../components/image"

const useStyles = makeStyles((theme) => ({
  imgResponsive: {
    height: `25em`,
    marginLeft: `4em`,
    [theme.breakpoints.down('sm')]: {
      height: `15em`,
      marginLeft: `1em`,    
      marginTop: `2em`,    
    },
  },
}));

const IndexPage = () =>{ 
  const classes = useStyles();
  return (
  <Layout>
    <SEO title="Malalaulart" />
    <div
      style={{
      position: `absolute`,
      height: `100%`,
      width: `100%`,
      backgroundImage: `url(${Background})`, 
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      }}>
      <div className="d-flex justify-content-center px-0 align-items-center h-100 w-100">
        <Fade
          left
          duration={1000}
          delay={1000}
          cascade
          distance="50px"
        >
          <img src={Logo} className={classes.imgResponsive}></img>
        </Fade>
        <div>

        </div>
      </div>
    <Link className="linkp" to="/page-2/">Formulario</Link> <br />
      </div>
  </Layout>
)}

export default IndexPage
