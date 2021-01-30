import React, { useState, useEffect } from "react";
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-medium-image-zoom'
import ilus1 from "./img/ilus1.JPG"
import ilus2 from "./img/ilus2.JPG"
import ilus3 from "./img/ilus3.JPG"
import ilus4 from "./img/ilus4.JPG"
import ilus5 from "./img/ilus5.JPG"
import ilus6 from "./img/ilus6.JPG"
import ilus7 from "./img/ilus7.JPG"
import ilus8 from "./img/ilus8.JPG"
import ilus9 from "./img/ilus9.JPG"
import ilus10 from "./img/ilus10.JPG"
import ilus11 from "./img/ilus11.JPG"
import ilus12 from "./img/ilus12.JPG"
import ilus13 from "./img/ilus13.JPG"
import Loading from "./loading.js"


const Gallery = (e) =>{
    const [isLoading, setIsLoading] = useState([]);
    const [ilust1, setIlust1] = useState(false);
    const [ilust2, setIlust2] = useState(false);
    const [ilust3, setIlust3] = useState(false);
    const [ilust4, setIlust4] = useState(false);
    const [ilust5, setIlust5] = useState(false);
    const [ilust6, setIlust6] = useState(false);
    const [ilust7, setIlust7] = useState(false);
    const [ilust8, setIlust8] = useState(false);
    const [ilust9, setIlust9] = useState(false);
    const [ilust10, setIlust10] = useState(false);
    const [ilust11, setIlust11] = useState(false);
    const [ilust13, setIlust13] = useState(false);
    const [loadImg, setLoadImg] = useState(0);

    
    const ilust = [
        {img: ilus1},{img: ilus2},{img: ilus3}, 
        {img: ilus4},{img: ilus5},{img: ilus6},
        {img: ilus7},{img: ilus8},{img: ilus9},
        {img: ilus10},{img: ilus11},{img: ilus13}
    ]

    const handleLoad = (e) => {
        console.log('loaded');
        setIlust1(false);
    }
    const handleIlus2 = (e) => {
        console.log('loaded');
        setIlust2(false);
    }
    const handleIlus3 = (e) => {
        console.log('loaded');
        setIlust3(false);
    }
    const handleIlus4 = (e) => {
        console.log('loaded');
        setIlust4(false);
    }
    const handleIlus5 = (e) => {
        console.log('loaded');
        setIlust5(false);
    }
    const handleIlus6 = (e) => {
        console.log('loaded');
        setIlust6(false);
    }
    const handleIlus7 = (e) => {
        console.log('loaded');
        setIlust7(false);
    }
    const handleIlus8 = (e) => {
        console.log('loaded');
        setIlust8(false);
    }
    const handleIlus9 = (e) => {
        console.log('loaded');
        setIlust9(false);
    }
    const handleIlus10 = (e) => {
        console.log('loaded');
        setIlust10(false);
    }
    const handleIlus11 = (e) => {
        console.log('loaded');
        setIlust11(false);
    }
    const handleIlus13 = (e) => {
        console.log('loaded');
        setIlust13(false);
    }


    return (
        <>
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust1? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleLoad} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus1}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust1 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust2? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus2} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus2}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust2 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust3? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus3} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus3}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust3 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust4? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus4} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus4}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust4 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust5? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus5} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus5}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust5 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust6? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus6} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus6}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust6 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust7? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus7} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus7}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust7 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust8? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus8} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus8}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust8 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust9? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus9} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus9}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust9 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust10? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus10} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus10}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust10 &&
                    <div className="col-6 col-md-4 col-lg-3 d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust11? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus11} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus11}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust11 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
                <Fade
                left
                duration={1000}
                distance="100px"
                // key={id}
                >
                <div style={{display: ilust13? 'flex': 'none'}} className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img 
                        onLoad={handleIlus13} 
                        style={{width: "100%", marginBottom: "0px"}} 
                        src={ilus13}>
                    </img>
                    </Zoom>
                </div>
                </Fade>
                { !ilust13 &&
                    <div className="col-6 col-md-4 col-lg-3  d-flex  justify-content-center align-items-center">
                        <Loading/>
                    </div>
                }
        </>
    )
}

export default Gallery