import React, { useCallback, useState } from "react"
import { Link } from "gatsby"
import "./custom.css"
import Zoom from 'react-medium-image-zoom'

import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import Layout from "../components/layout"
import Background from "../images/Background.PNG"
import Logo from "../images/logoB.PNG"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Image from "../components/image"
import ilus1 from "../images/ilus1.PNG"
import ilus2 from "../images/ilus2.PNG"
import ilus3 from "../images/ilus3.PNG"
import ilus4 from "../images/ilus4.PNG"
import ilus5 from "../images/ilus5.PNG"
import ilus6 from "../images/ilus6.PNG"
import ilus7 from "../images/ilus7.PNG"
import ilus8 from "../images/ilus8.PNG"
import ilus9 from "../images/ilus9.PNG"
import ilus10 from "../images/ilus10.PNG"
import ilus11 from "../images/ilus11.PNG"
import ilus12 from "../images/ilus12.PNG"
import ilus13 from "../images/ilus13.PNG"
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  imgResponsive: {
    height: `25em`,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: `15em`,   
    },
  },
  logoResponsive: {
    height: '400px',
    zIndex: '1',
    [theme.breakpoints.down('sm')]: {
      height: `300px`,   
    },
  },
  fullSize: {
    height: "100%"
  },
  divbuttonForm: {
    width: "300px",
    height: "100px",
    // backgroundColor: "#FDDBB1",
    // cursor: "pointer",
    marginBottom: "20%",
    marginTop: "20%",
    [theme.breakpoints.down('sm')]: {
      marginBottom: "40%",
      marginTop: "40%",
    },
    borderRadius: "20px",
  },
  pButtonForm: {
    color: "black",
    marginBottom: "0px",
    fontSize: "20px",
    [theme.breakpoints.down('sm')]: {
      fontSize: `15px`,   
    },
  },
  venezuelaPhone:{
    position: "absolute",
    left: "10px",
    top:"10px",
    fontSize: "15px",
    [theme.breakpoints.down('sm')]: {
      fontSize: `10px`,   
    },
  },
  panamaPhone:{
    position: "absolute",
    right: "10px",
    top:"10px",
    fontSize: "15px",
    [theme.breakpoints.down('sm')]: {
      fontSize: `10px`,
      left: "10px",
      top:"25px",   
    },
  },
  byMarialaura:{
    position: "absolute",
    right: "10px",
    bottom:"10px",
    marginBottom: "0px",
    fontSize: "15px",
    [theme.breakpoints.down('sm')]: {
      fontSize: `10px`,   
    },
  },
}));

const IndexPage = () =>{ 
  const [show, setShow] = useState(true)
  const [clase, setClase] = useState("")
  const classes = useStyles();
  const ilustrations = {
      ilus1, ilus2, ilus3, ilus4,ilus5,ilus6, ilus7, ilus8 ,ilus9 ,ilus10, ilus11, ilus12, ilus13
    }
  const ilust = [
    {img: ilus1},
    {img: ilus2}, 
    {img: ilus3}, 
    {img: ilus4},
    {img: ilus5},
    {img: ilus6},
    {img: ilus7},
    {img: ilus8},
    {img: ilus9},
    {img: ilus10},
    {img: ilus11},
    {img: ilus13}
]

const history = useHistory();


  const [isZoomed, setIsZoomed] = useState(false)

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  return (
  <Layout>
    <SEO title="Malalaulart" />
    <Image fileName='Background.PNG'/>
      <div className={classes.fullSize + " w-100 m-0"}>
          <div className={classes.fullSize + " d-flex justify-content-center px-0 align-items-center"}>
          <Fade
            left
            duration={1000}
            delay={800}
            cascade
            distance="50px"
          >
            <img src={Logo} className={classes.logoResponsive}></img>
          </Fade>
          <Fade
            left
            duration={800}
            delay={500}
            distance="50px"
          >
          <p className={classes.venezuelaPhone}>Venezuela: +58 412-340-5104</p>
          </Fade>
          <Fade
            left
            duration={800}
            delay={700}
            distance="50px"
          >
          <p className={classes.panamaPhone}>Panama: +507 6983-8048</p>
          </Fade>
          <Fade
            left
            duration={800}
            delay={900}
            distance="50px"
          >
          <p className={classes.byMarialaura}>by Marialaura Matteo</p>
          </Fade>
          </div>
          
          <div className={classes.fullSize + "d-flex justify-content-center row m-3 m-sm-4 m-md-5"}>
          <Fade
            left
            duration={1000}
            delay={800}
            distance="100px"
          >
            {/* <div onClick={(e)=>{history.push("/page-2/");}} className={classes.divbuttonForm + " col-12 col-md-10 d-flex justify-content-center align-items-center"}>
              <p className={classes.pButtonForm}>Realiza tu pedido aqui</p>
            </div> */}
            {/* <button className={classes.divbuttonForm + " button col-12 col-md-10 d-flex justify-content-center align-items-center"}>
              Fancy Button
              <div className="__horizontal"></div>
              <div className="__vertical"></div>
            </button> */}
            <button className={classes.divbuttonForm + " button slide col-12 col-md-10 d-flex justify-content-center align-items-center"}>Realiza tu pedido aqui</button>
          </Fade>
            {ilust.map((ilustra) => (
            <Fade
            left
            duration={1000}
            delay={800}
            distance="100px"
          >
            <div className="col-6 col-md-4 col-lg-3 p-0">
              <Zoom>
                <img style={{width: "100%", marginBottom: "0px"}} src={ilustra.img}></img>
              </Zoom>
            </div>
          </Fade>
            ))
            }
          </div>
          <Link to="/page-2/">𝔹𝔼𝕃𝕀𝔼𝕍𝔼</Link> <br />
      </div>
  </Layout>
)}

export default IndexPage
