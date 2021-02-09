import React, { useCallback, useState, useEffect } from "react"
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
import { useHistory } from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LazyLoad from 'react-lazyload';
import Loading from "../components/loading.js"
import Gallery from "../components/gallery.js"
import promo2 from "../images/promo2.JPG"
import promo from "../images/promo.JPG"
import Swal from 'sweetalert2'
import ReactGA from 'react-ga';


import { useStaticQuery, graphql } from "gatsby"



const useStyles = makeStyles((theme) => ({
  imgResponsive: {
    height: `25em`,
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      height: `15em`,   
    },
  },
  logoResponsive: {
    height: '400px',
    zIndex: '1',
    [theme.breakpoints.down('xs')]: {
      height: `300px`,   
    },
  },
  fullSize: {
    height: "100%"
  },
  divbuttonForm: {
    width: "70%",
    height: "100px",
    // backgroundColor: "#FDDBB1",
    // cursor: "pointer",
    marginBottom: "5%",
    marginTop: "20%",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      height: "70px"
    },
    borderRadius: "20px",
  },
  divbuttonPromo: {
    width: "70%",
    height: "100px",
    // backgroundColor: "#FDDBB1",
    cursor: "pointer",
    marginBottom: "20%",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      height: "70px"
    },
    borderRadius: "20px",
  },
  venezuelaPhone:{
    position: "absolute",
    left: "10px",
    top:"10px",
    fontSize: "15px",
    [theme.breakpoints.down('xs')]: {
      fontSize: `10px`,   
    },
  },
  panamaPhone:{
    position: "absolute",
    right: "10px",
    top:"10px",
    fontSize: "15px",
    [theme.breakpoints.down('xs')]: {
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
    [theme.breakpoints.down('xs')]: {
      fontSize: `10px`,   
    },
  },
  pFooter:{
    marginBottom: "20px", 
    marginTop: "20px",
    [theme.breakpoints.down('xs')]: {
      fontSize: `10px`,   
    },
  },
  social: {
    color: "#addbb2",
    fontSize: "40px",
    [theme.breakpoints.down('xs')]: {
      fontSize: `30px`,   
    },
  },
}));

const IndexPage = () =>{ 
  const classes = useStyles();
  const [imgLoading, setImgLoading] = useState([]);
  const [loading, setloading] = useState(true);
  const [logo, setLogo] = useState(false);

const history = useHistory();


  const [isZoomed, setIsZoomed] = useState(false)

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  const handleImg = (id) => {
    setImgLoading([...imgLoading, id])
  }
  const analytics = () => {
    ReactGA.event({
      category: 'Formulario',
      action: 'click'
    })
  }

  const handlePromo = (e) => {
    Swal.fire({
      title: '<strong>PROMOS <3</strong>',
      confirmButtonText: `Promo 1 :)`,
      cancelButtonText: `Ninguna :(`,
      denyButtonText: `Promo 2 :)`,
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: '#a7d3af',
      cancelButtonColor: '#fcb1a4',
      denyButtonColor: '#a7d3af',
      html:
      `<img src="${promo}"/>`
      + 
      `<img src="${promo2}"/>` ,
      backdrop: `
      rgb(253, 202, 192)
      no-repeat
    `
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let link = `https://api.whatsapp.com/send?phone=584123405104&text=Holaaa%20♥♥♥♥♥♥♥♥♥♥♥%20Quisiera%20pedirte%20la%20Promo%201%20,%20son%202%20CUADROS,%20con%202%20personas%20,%20con%20FNI%20,%20con%20Dedicatoria%20de%20texto%20,%20el%20material%20seria%20de%20MDF%20,%20con%20un%20tamaño%20de%2020x20%20y%20tendria%20un%20precio%20de%2040$%20♥♥`
        window.open(link)
        console.log("confirm")
      }else if(result.isDenied){
        let link = `https://api.whatsapp.com/send?phone=584123405104&text=Holaaa%20♥♥♥♥♥♥♥♥♥♥♥%20Quisiera%20pedirte%20la%20Promo%202%20,%20es%201%20CUADRO,%20con%202%20personas%20,%20con%20FNI%20,%20con%20Dedicatoria%20de%20texto%20,%20el%20material%20seria%20de%20MDF%20,%20con%20un%20tamaño%20de%2020x20%20y%20tendria%20un%20precio%20de%2025$%20♥♥`
        window.open(link)
        console.log("denied")
      }
    })
  }

  useEffect(()=>{
    setloading(false)
    // ReactGA.initialize('UA-188519923-1');
    // ReactGA.pageview(window.location.pathname)
  }, [])

  const handleLogoLoad = (e) => {
    setLogo(true)
  }

  return (
  <Layout>
    <SEO title="Malalaulart" />
    {loading ? (
      <>
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
          <Loading/>
        </div>
        </>
    ):(
      <>
      <Image fileName="Background.PNG"/>
      <div className={classes.fullSize + " w-100 m-0"}>
          <div className={classes.fullSize + " d-flex justify-content-center px-0 align-items-center"}>
            
            <div style={{display: logo? 'flex': 'none'}} >
            <Fade
              left
              duration={1000}
              delay={800}
              cascade
              distance="50px"
            >
              <img onLoad={handleLogoLoad} src={Logo} className={classes.logoResponsive}></img>
            </Fade>
            </div>
              { !logo &&
                  <div className="d-flex justify-content-center px-0 align-items-center">
                      <Loading/>
                  </div>
              }
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
          <div className={classes.fullSize + " d-flex justify-content-center row m-3 m-sm-4 m-md-5"}>
            <div className=" mt-5 col-12 d-flex justify-content-center align-items-center">
            <Fade
            left
            duration={1000}
            distance="80px"
          >
              <IconButton onClick={(e) =>  window.open("https://www.instagram.com/malalaulart/")} aria-label="instagram">
                  <InstagramIcon className={classes.social}/>
              </IconButton>
          </Fade>
          <Fade
            bottom
            duration={1000}
            distance="80px"
          >
              <IconButton onClick={(e) =>  window.open("https://wa.me/+584123405104")} aria-label="instagram">
                  <WhatsAppIcon className={classes.social}/>
              </IconButton>
          </Fade>
          <Fade
            right
            duration={1000}
            distance="80px"
          >
              <IconButton onClick={(e) =>  window.open("mailto:malalaulart@gmail.com", '_self')} aria-label="instagram">
                  <MailOutlineIcon className={classes.social}/>
              </IconButton>
          </Fade>
            </div>
            <div className="col-12 col-md-10 mb-5  d-flex justify-content-center align-items-center">
              <Link onClick={analytics} className={classes.divbuttonForm + " slide d-flex justify-content-center align-items-center"} to="/page-2/">Realiza tu pedido aqui</Link> <br />
            </div>
            {/* <div className="col-12 col-md-10  d-flex justify-content-center align-items-center">
              <p onClick={handlePromo} className={classes.divbuttonPromo + " slide d-flex justify-content-center align-items-center"}>Promo San Valentin</p>
            </div> */}
              <Gallery/>
            <p className={classes.pFooter}>♥ LLeva un Recuerdo especial siempre contigo ♥</p>
          </div>
      </div>
      </>
    )
    }
  </Layout>
)}

export default IndexPage
