import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import fondo2 from "../images/fondo2.jpg"
import Image from "../components/image"
import "./custom.css"
import { withStyles , makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';






const useStyles = makeStyles((theme) => ({
  divForm: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "30px",
    height: "87%",
    overflowY: "scroll"
  },
  divTotal: {
    position: "absolute",
    bottom: "4px",
    right: "10px",
    height: "35px",
    width: "150px",
    borderRadius: "30px",
    backgroundColor: "#addbb2",
    [theme.breakpoints.down('xs')]: {
      height: "30px",
      width: "120px",   
    },
  },
  pTotal: {
    fontSize: "15px",
    color: "white",
    marginBottom: "0px",
    marginTop: "7px",
    marginLeft: "7px",
    [theme.breakpoints.down('xs')]: {
      fontSize: "12px",
      marginTop: "7px",
      marginLeft: "7px",
    },
  },
  divRow: {
    overflowY: "hidden",
    marginRight: "0px",
    marginLeft: "0px",
  },
  textField: {
    fontFamily: 'Courier Prime !important',
  },
  labelForm: {
    marginLeft: "30px",
    fontSize: "15px", 
    marginBottom: "0px",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "0px",
    },
  },
}));

//---------------------------SLIDER------------------

const PrettoSlider = withStyles({
  root: {
    color: 'red',
    height: 8,
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -5,
    marginLeft: -8,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: '-11px',
    fontSize: "15px"
  },
  track: {
    height: 5,
    borderRadius: 4,
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

const SecondPage = () => {
  const classes = useStyles();
  const [plano, setPlano] = useState("")
  const [personas, setPersonas] = useState()
  const [prevPerson, setPrevPerson] = useState("")
  const [total, setTotal] = useState(0)

  const handlePlano = (e) => {
    handleTotal(e.target.value)
    setPlano(e.target.value)
  }

  const handlePersonas = (e, value) => {
    setPersonas(value)
    handleTotal(value)
  }

  const handleTotal = (item) => {
    switch (item) {
      case 1 :
        if(prevPerson == ""){
          setTotal(total + 5);
        }
        if(prevPerson == "1"){
          setTotal(total);
        }
        if(prevPerson == "2"){
          setTotal(total - 7 + 5)
        }
        if(prevPerson == "3"){
          setTotal(total - 10 + 5)
        }
        if(prevPerson == "4"){
          setTotal(total - 13 + 5)
        }
        if(prevPerson == "5"){
          setTotal(total - 15 + 5)
        }
        if(prevPerson == "6"){
          setTotal(total - 18 + 5)
        }
        setPrevPerson("1")
        break;
      case 2 :
        if(prevPerson == ""){
          setTotal(total + 7);
        }
        if(prevPerson == "1"){
          setTotal(total - 5 + 7);
        }
        if(prevPerson == "2"){
          setTotal(total)
        }
        if(prevPerson == "3"){
          setTotal(total - 10 + 7)
        }
        if(prevPerson == "4"){
          setTotal(total - 13 + 7)
        }
        if(prevPerson == "5"){
          setTotal(total - 15 + 7)
        }
        if(prevPerson == "6"){
          setTotal(total - 18 + 7)
        }
        setPrevPerson("2")
        break;
      case 3 :
        if(prevPerson == ""){
          setTotal(total + 10);
        }
        if(prevPerson == "1"){
          setTotal(total - 5 + 10);
        }
        if(prevPerson == "2"){
          setTotal(total - 7 + 10)
        }
        if(prevPerson == "3"){
          setTotal(total)
        }
        if(prevPerson == "4"){
          setTotal(total - 13 + 10)
        }
        if(prevPerson == "5"){
          setTotal(total - 15 + 10)
        }
        if(prevPerson == "6"){
          setTotal(total - 18 + 10)
        }
        setPrevPerson("3")
        break;
      case 4 :
        if(prevPerson == ""){
          setTotal(total + 13);
        }
        if(prevPerson == "1"){
          setTotal(total - 5 + 13);
        }
        if(prevPerson == "2"){
          setTotal(total - 7 + 13)
        }
        if(prevPerson == "3"){
          setTotal(total - 10 + 13)
        }
        if(prevPerson == "4"){
          setTotal(total)
        }
        if(prevPerson == "5"){
          setTotal(total - 15 + 13)
        }
        if(prevPerson == "6"){
          setTotal(total - 18 + 13)
        }
        setPrevPerson("4")
        break;
      case 5 :
        if(prevPerson == ""){
          setTotal(total + 15);
        }
        if(prevPerson == "1"){
          setTotal(total - 5 + 15);
        }
        if(prevPerson == "2"){
          setTotal(total - 7 + 15)
        }
        if(prevPerson == "3"){
          setTotal(total - 10 + 15)
        }
        if(prevPerson == "4"){
          setTotal(total - 13 + 15)
        }
        if(prevPerson == "5"){
          setTotal(total)
        }
        if(prevPerson == "6"){
          setTotal(total - 18 + 15)
        }        
        setPrevPerson("5")
        break;
      case 6 :
        if(prevPerson == ""){
          setTotal(total + 18);
        }
        if(prevPerson == "1"){
          setTotal(total - 5 + 18);
        }
        if(prevPerson == "2"){
          setTotal(total - 7 + 18)
        }
        if(prevPerson == "3"){
          setTotal(total - 10 + 18)
        }
        if(prevPerson == "4"){
          setTotal(total - 13 + 18)
        }
        if(prevPerson == "5"){
          setTotal(total - 15 + 18)
        }
        if(prevPerson == "6"){
          setTotal(total)
        }        
        setPrevPerson("6")
        break;
    }
    if(item === "CC"){
      if(plano != "CC")
      setTotal(total - 5 + 10)
      if(plano === ""){
        setTotal(total + 10)
      }
    }
    if(item == "CA"){
      if(plano != "CA"){
        setTotal(total - 10 + 5)
      }
      if(plano === ""){
        setTotal(total + 5)
      }
    }
  }

  function valuetext(value) {
    return `${value}`;
  }

  
  return (
  <Layout>
    <SEO title="Pedido" />
      <Image fileName="fondo3.PNG"/>
      <div style={{height: "100%"}} className={classes.divRow + " row d-flex justify-content-center align-items-center"}>
        <div className={classes.divForm + " col-10 p-3"}>
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <TextField className={classes.textField} fullWidth id="standard-basic" label="Nombre y Apellido" />
            </div>
            <div className="col-10 mt-2">
              <TextField fullWidth id="standard-basic" label="Pais" />
            </div>
            <div className="col-12 mt-4">
              <p className={classes.labelForm}>Estoy interesado en ...</p>
            </div>
            <div className="col-10">
              <FormControlLabel
                className={classes.checkbox}
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                label="Ilustracion Digital"
              />
            </div>
            <div className="col-10">
              <FormControlLabel
                className={classes.checkbox}
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                label="Cuadro"
              />
            </div>
            <div className="col-10">
              <FormControlLabel
                className={classes.checkbox}
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                label="Portarretrato"
              />
            </div>
            <div className="col-12 mt-4">
            <Typography className={classes.labelForm} gutterBottom>Cantidad de personas</Typography>
            </div>
            <div className="col-10">
              <PrettoSlider 
                valueLabelDisplay="auto" 
                aria-label="pretto slider"
                // getAriaValueText={handlePersonas} 
                step={1} 
                min={1}
                marks
                max={6} 
                defaultValue={1} 
                onChange={(e, value) => handlePersonas(e, value)}
                />
            </div>
            <div className="col-12 mt-2">
            <Typography className={classes.labelForm} gutterBottom>Plano de las personas</Typography>
            </div>
            <div className="col-10">
            <RadioGroup aria-label="gender" name="plano" value={plano} onChange={(e) => handlePlano(e)}>
                <FormControlLabel value="CC" control={<Radio />} label="Cuerpo completo" />
                <FormControlLabel value="CA" control={<Radio />} label="Cuello para arriba" />
            </RadioGroup>
            </div>
          </div>
        </div>
        <div className={classes.divTotal}>
            <p className={classes.pTotal}>{"Total: " + total + "$"}</p>
        </div>
      </div>

  </Layout>
)
}
export default SecondPage
