import React, { useState } from "react"
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
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: `15em`,   
    },
  },
  // logoResponsive: {
  //   height: '200px',
  //   [theme.breakpoints.down('sm')]: {
  //     height: `100px !important`,   
  //   },
  // },
}));

const IndexPage = () =>{ 
  const [show, setShow] = useState(true)
  const [clase, setClase] = useState("")
  const classes = useStyles();


  const handleFade = (e) => {
    setShow(!show)
  }
  const handleAnimate = (e) => {
    setClase("animate")
  }
  return (
  <Layout>
    <SEO title="Malalaulart" />
    <Image fileName='Background.PNG'/>
      <div className={classes.fullSize + " w-100 m-0"}>
          <div className={classes.fullSize + " d-flex justify-content-center px-0 align-items-center"}>
          <Fade
            left
            duration={600}
            // className={classes.logoResponsive}
            cascade
            distance="50px"
            when={show}
          >
            <img src={Logo} height="80" width="80"></img>
          </Fade>
          </div>
          <p style={{ cursor: 'pointer'}} onClick={handleFade}>Click</p>
          <p style={{ cursor: 'pointer'}} onClick={handleAnimate}>Click up</p>
          <div className={"prueba " + clase}>
          <Link className="linkp" style={{ textDecoration: 'none', color: 'white'}} to="/page-2/">𝔹𝔼𝕃𝕀𝔼𝕍𝔼</Link> <br />
          </div>
          <Image fileName='fondo3.PNG'/>
      </div>
  </Layout>
)}

export default IndexPage
