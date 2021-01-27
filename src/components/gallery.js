import React, { useState, useEffect } from "react";
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-medium-image-zoom'
import ilus1 from "../images/ilus1.JPG"
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
import Loading from "./loading.js"


const Gallery = (e) =>{
    const [isLoading, setIsLoading] = useState([]);
    const [ilustLoad1, setIlustLoad1] = useState(true);
    
    // const handleImg = (id) => {
    //     setImgLoading([...imgLoading, id])
    // }

    useEffect(() => {
        const ilust = [
            {img: ilus1},{img: ilus2},{img: ilus3}, 
            {img: ilus4},{img: ilus5},{img: ilus6},
            {img: ilus7},{img: ilus8},{img: ilus9},
            {img: ilus10},{img: ilus11},{img: ilus13}
        ]
        
        cacheImages(ilust)
    }, []);
    
    const ilust = [
        {img: ilus1},{img: ilus2},{img: ilus3}, 
        {img: ilus4},{img: ilus5},{img: ilus6},
        {img: ilus7},{img: ilus8},{img: ilus9},
        {img: ilus10},{img: ilus11},{img: ilus13}
    ]
    const cacheImages = async (ilust) => {
        const promises = await ilust.map((src) => {
            return new Promise(function (resolve, reject) {
                const img = new Image();

                img.src = src;
                img.onload = resolve();
                img.onerror = reject();
            });
        });

        await Promise.all(promises);

        setIsLoading(false)
    }

    return (
        <>
        {isLoading ? (
            <div className="col-12 d-flex justify-content-center">
                <Loading/>
            </div>
        ):(
            <>
            {ilust.map((ilustra, id) => (
                <Fade
                left
                duration={1000}
                distance="100px"
                >
                <div className="col-6 col-md-4 col-lg-3 p-0">
                    <Zoom>
                    <img style={{width: "100%", marginBottom: "0px"}} src={ilustra.img}></img>
                    </Zoom>
                </div>
                </Fade>
            ))}
            </>
        )
        }
        </>
    )
}

export default Gallery