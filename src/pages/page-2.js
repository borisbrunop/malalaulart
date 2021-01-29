import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
import Tooltip from '@material-ui/core/Tooltip';
import Swal from 'sweetalert2'
import { TramRounded } from "@material-ui/icons"
import Loading from "../components/loading.js"

const useStyles = makeStyles((theme) => ({
  divForm: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "30px",
    height: "87%",
    overflowY: "scroll",
    marginTop: "-40px"
  },
  divTotal: {
    position: "absolute",
    bottom: "8px",
    right: "10px",
    height: "40px",
    width: "150px",
    borderRadius: "30px",
    backgroundColor: "#addbb2",
    [theme.breakpoints.down('xs')]: {
      width: "120px",   
    },
  },
  divEnviar: {
    position: "absolute",
    bottom: "8px",
    height: "40px",
    width: "150px",
    borderRadius: "30px",
    backgroundColor: "#addbb2",
    cursor: "pointer",
    [theme.breakpoints.down('xs')]: {
      width: "110px",
      left: "10px",
    },
  },
  pTotal: {
    fontSize: "15px",
    color: "black",
    marginBottom: "0px",
    [theme.breakpoints.down('xs')]: {
      fontSize: "15px",
    },
  },
  pEnviar: {
    fontSize: "15px",
    color: "black",
    marginBottom: "0px",
    [theme.breakpoints.down('xs')]: {
      fontSize: "15px",
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
    marginLeft: "20px",
    fontSize: "15px", 
    marginBottom: "0px",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "0px",
    },
  },
  customWidth: {
    maxWidth: 500,
  },
  pInfoFondo: {
    display:  "none",
    [theme.breakpoints.down('xs')]: {
      display: "flex",
      fontSize: "8px",
      color: "black",
      marginBottom: "0px",
    },
  },
  labelMaterial:{
    fontSize: "12px", 
    marginBottom: "0px",
    marginTop: "10px"
  },
  pCuadro:{
    fontSize: "15px",
    marginBottom: "0px",
    marginTop: "10px",
    textAlign: "center",
    [theme.breakpoints.down('xs')]: {
      fontSize: "10px",
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
  const [texto, setTexto] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [tamano, setTamano] = useState("20x20")
  const [ilustD, setIlustD] = useState(false)
  const [cuadro, setCuadro] = useState(false)
  const [porta, setPorta] = useState(false)
  const [quiero, setQuiero] = useState("")
  const [fondo, setFondo] = useState("")
  const [personas, setPersonas] = useState(0)
  const [animales, setAnimales] = useState(0)
  const [prevPerson, setPrevPerson] = useState("")
  const [prevAnimal, setPrevAnimal] = useState("")
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)

  const textoFondo = `El costo del fondo ilustrado puede varias 
  dependiendo de la dificultad del fondo, en caso de no ilustrar 
  el fondo tendra opcion a elegir el color de su preferencia,
  y elementos como estrellas, corazones, etc.`

  const handlePlano = (e) => {
    handleTotal(e.target.value)
    setPlano(e.target.value)
  }
  const handleTexto = (e) => {
    handleTotal(e.target.value)
    setTexto(e.target.value)
  }

  const handleFondo = (e) => {
      handleTotal(e.target.value)
      setFondo(e.target.value)
  }

  const handlePorta = (value) => {
    if(cuadro === true && value === true){
      if(tamano === "20x20"){
        setTotal(total - 18 + 15)
      }
      if(tamano === "30x20"){
        setTotal(total - 20 + 15)
      }
      if(tamano === "40x30"){
        setTotal(total - 22 + 15)
      }
      if(tamano === "50x40"){
        setTotal(total - 25 + 15)
      }
      setQuiero("PORT")
      setIlustD(true)
      setCuadro(false)
    }
    if(cuadro === false && value === true){
      setIlustD(true)
      setTotal(total + 15)
      setQuiero("PORT")
    }
    if(value === false){
      setTotal(total - 15)
      setQuiero("")
      setIlustD(false)
    }
    setPorta(!porta)
  }

  const handleCuadro = (value) => {
    if(value === true){
        if(tamano === "20x20"){
          setTotal(total + 18)
        }
        if(tamano === "30x20"){
          setTotal(total + 20)
        }
        if(tamano === "40x30"){
          setTotal(total + 22)
        }
        if(tamano === "50x40"){
          setTotal(total + 25)
        }
        setQuiero("CUADRO")
    }else{
      if(cuadro){
        if(tamano === "20x20"){
          setTotal(total - 18)
        }
        if(tamano === "30x20"){
          setTotal(total - 20)
        }
        if(tamano === "40x30"){
          setTotal(total - 22)
        }
        if(tamano === "50x40"){
          setTotal(total - 25)
        }
      }
      setQuiero("")
      setIlustD(false)
    }
    
    if(cuadro === false){
      setIlustD(true)
    }
    if(porta === true){
      if(tamano === "20x20"){
        setTotal(total - 15 + 18)
      }
      if(tamano === "30x20"){
        setTotal(total - 15 + 20)
      }
      if(tamano === "40x30"){
        setTotal(total - 15 + 22)
      }
      if(tamano === "50x40"){
        setTotal(total - 15 + 25)
      }
      setPorta(false)
    }
    setCuadro(!cuadro)
  }

  const totalTamano = (value) => {
    switch (value){
      case "20x20":
        if(tamano === "20x20"){
          setTotal(total)
        }
        if(tamano === "30x20"){
          setTotal(total - 20 + 18)
        }
        if(tamano === "40x30"){
          setTotal(total - 22 + 18)
        }
        if(tamano === "50x40"){
          setTotal(total - 25 + 18)
        }
        break;
      case "30x20":
        if(tamano === "20x20"){
          setTotal(total - 18 + 20)
        }
        if(tamano === "30x20"){
          setTotal(total)
        }
        if(tamano === "40x30"){
          setTotal(total - 22 + 20)
        }
        if(tamano === "50x40"){
          setTotal(total - 25 + 20)
        }
        break;
      case "40x30":
        if(tamano === "20x20"){
          setTotal(total - 18 + 22)
        }
        if(tamano === "30x20"){
          setTotal(total - 20 + 22)
        }
        if(tamano === "40x30"){
          setTotal(total)
        }
        if(tamano === "50x40"){
          setTotal(total - 25 + 22)
        }
        break;
      case "50x40":
        if(tamano === "20x20"){
          setTotal(total - 18 + 25)
        }
        if(tamano === "30x20"){
          setTotal(total - 20 + 25)
        }
        if(tamano === "40x30"){
          setTotal(total - 22 + 25)
        }
        if(tamano === "50x40"){
          setTotal(total)
        }
        break;
    }
  }

  const handleTamano = (e) => {
    let size = e.target.value
    totalTamano(size)
    setTamano(size)
  }

  const handleAnimales = (e, value) => {
    switch (value) {
      case 0 :
        if(prevAnimal == ""){
          setTotal(total);
          }
          if(prevAnimal == "1"){
            setTotal(total - 5);
          }
          if(prevAnimal == "2"){
            setTotal(total - 10)
          }
          if(prevAnimal == "3"){
            setTotal(total - 15)
          }
            if(prevAnimal == "4"){
              setTotal(total - 20)
            }
            if(prevAnimal == "5"){
              setTotal(total - 25)
            }
          setPrevAnimal("")
        break;
      case 1 :
        if(prevAnimal == ""){
      setTotal(total + 5);
      }
      if(prevAnimal == "1"){
        setTotal(total);
      }
      if(prevAnimal == "2"){
        setTotal(total - 10 + 5)
      }
      if(prevAnimal == "3"){
        setTotal(total - 15 + 5)
      }
        if(prevAnimal == "4"){
          setTotal(total - 20 + 5)
        }
        if(prevAnimal == "5"){
          setTotal(total - 25 + 5)
        }  
        setPrevAnimal("1")
        break;
      case 2 :
        if(prevAnimal == ""){
          setTotal(total + 10);
        }
        if(prevAnimal == "1"){
          setTotal(total - 5 + 10);
        }
        if(prevAnimal == "2"){
          setTotal(total)
        }
        if(prevAnimal == "3"){
          setTotal(total - 15 + 10)
        }
        if(prevAnimal == "4"){
          setTotal(total - 20 + 10)
        }
        if(prevAnimal == "5"){
          setTotal(total - 25 + 10)
        }
        setPrevAnimal("2")
        break;
      case 3 :
        if(prevAnimal == ""){
          setTotal(total + 15);
        }
        if(prevAnimal == "1"){
          setTotal(total - 5 + 15);
        }
        if(prevAnimal == "2"){
          setTotal(total - 10 + 15)
        }
        if(prevAnimal == "3"){
          setTotal(total)
        }
        if(prevAnimal == "4"){
          setTotal(total - 20 + 15)
        }
        if(prevAnimal == "5"){
          setTotal(total - 25 + 15)
        }
        setPrevAnimal("3")
        break;
      case 4 :
        if(prevAnimal == ""){
          setTotal(total + 20);
        }
        if(prevAnimal == "1"){
          setTotal(total - 5 + 20);
        }
        if(prevAnimal == "2"){
          setTotal(total - 10 + 20)
        }
        if(prevAnimal == "3"){
          setTotal(total - 15 + 20)
        }
        if(prevAnimal == "4"){
          setTotal(total)
        }
        if(prevAnimal == "5"){
          setTotal(total - 25 + 20)
        }
        setPrevAnimal("4")
        break;
      case 5 :
        if(prevAnimal == ""){
          setTotal(total + 25);
        }
        if(prevAnimal == "1"){
          setTotal(total - 5 + 25);
        }
        if(prevAnimal == "2"){
          setTotal(total - 10 + 25)
        }
        if(prevAnimal== "3"){
          setTotal(total - 15 + 25)
        }
        if(prevAnimal == "4"){
          setTotal(total - 20 + 25)
        }
        if(prevAnimal == "5"){
          setTotal(total)
        }
        setPrevAnimal("5")
        break;
      }
    setAnimales(value)
  }

  const handlePersonas = (e, value) => {
    setPersonas(value)
    handleTotal(value)
  }
  const handleTotal = (item) => {
      switch (item) {
        case 0 :
          if(prevPerson === ""){
            setTotal(total);
          }
          if(prevPerson === "1"){
            setTotal(total - 5);
          }
          if(prevPerson === "2"){
            setTotal(total - 7)
          }
          if(prevPerson === "3"){
            setTotal(total - 9)
          }
          if(prevPerson === "4"){
            setTotal(total - 11)
          }
          if(prevPerson === "5"){
            setTotal(total - 13)
          }
          if(prevPerson === "6"){
            setTotal(total - 15)
          }
          if(prevPerson === "7"){
            setTotal(total - 17)
          }
          if(prevPerson === "8"){
            setTotal(total - 19)
          }
          if(prevPerson === "9"){
            setTotal(total - 21)
          }
          if(prevPerson == "10"){
            setTotal(total - 23)
          }
          setPrevPerson("")
          break;
        case 1 :
          if(prevPerson === ""){
            setTotal(total + 5);
          }
          if(prevPerson === "1"){
            setTotal(total);
          }
          if(prevPerson === "2"){
            setTotal(total - 7 + 5)
          }
          if(prevPerson === "3"){
            setTotal(total - 9 + 5)
          }
          if(prevPerson === "4"){
            setTotal(total - 11 + 5)
          }
          if(prevPerson === "5"){
            setTotal(total - 13 + 5)
          }
          if(prevPerson === "6"){
            setTotal(total - 15 + 5)
          }
          if(prevPerson === "7"){
            setTotal(total - 17 + 5)
          }
          if(prevPerson === "8"){
            setTotal(total - 19 + 5)
          }
          if(prevPerson === "9"){
            setTotal(total - 21 + 5)
          }
          if(prevPerson == "10"){
            setTotal(total - 23 + 5)
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
            setTotal(total - 9 + 7)
          }
          if(prevPerson == "4"){
            setTotal(total - 11 + 7)
          }
          if(prevPerson == "5"){
            setTotal(total - 13 + 7)
          }
          if(prevPerson == "6"){
            setTotal(total - 15 + 7)
          }
          if(prevPerson == "7"){
            setTotal(total - 17 + 7)
          }
          if(prevPerson == "8"){
            setTotal(total - 19 + 7)
          }
          if(prevPerson == "9"){
            setTotal(total - 21 + 7)
          }
          if(prevPerson == "10"){
            setTotal(total - 23 + 7)
          }
          setPrevPerson("2")
          break;
        case 3 :
          if(prevPerson == ""){
            setTotal(total + 9);
          }
          if(prevPerson == "1"){
            setTotal(total - 5 + 9);
          }
          if(prevPerson == "2"){
            setTotal(total - 7 + 9)
          }
          if(prevPerson == "3"){
            setTotal(total)
          }
          if(prevPerson == "4"){
            setTotal(total - 11 + 9)
          }
          if(prevPerson == "5"){
            setTotal(total - 13 + 9)
          }
          if(prevPerson == "6"){
            setTotal(total - 15 + 9)
          }
          if(prevPerson == "7"){
            setTotal(total - 17 + 9)
          }
          if(prevPerson == "8"){
            setTotal(total - 19 + 9)
          }
          if(prevPerson == "9"){
            setTotal(total - 21 + 9)
          }
          if(prevPerson == "10"){
            setTotal(total - 23 + 9)
          }
          setPrevPerson("3")
          break;
        case 4 :
          if(prevPerson == ""){
            setTotal(total + 11);
          }
          if(prevPerson == "1"){
            setTotal(total - 5 + 11);
          }
          if(prevPerson == "2"){
            setTotal(total - 7 + 11)
          }
          if(prevPerson == "3"){
            setTotal(total - 9 + 11)
          }
          if(prevPerson == "4"){
            setTotal(total)
          }
          if(prevPerson == "5"){
            setTotal(total - 13 + 11)
          }
          if(prevPerson == "6"){
            setTotal(total - 15 + 11)
          }
          if(prevPerson == "7"){
            setTotal(total - 17 + 11)
          }
          if(prevPerson == "8"){
            setTotal(total - 19 + 11)
          }
          if(prevPerson == "9"){
            setTotal(total - 21 + 11)
          }
          if(prevPerson == "10"){
            setTotal(total - 23 + 11)
          }
          setPrevPerson("4")
          break;
        case 5 :
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
            setTotal(total - 9 + 13)
          }
          if(prevPerson == "4"){
            setTotal(total - 11 + 13)
          }
          if(prevPerson == "5"){
            setTotal(total)
          }
          if(prevPerson == "6"){
            setTotal(total - 15 + 13)
          }
          if(prevPerson == "7"){
            setTotal(total - 17 + 13)
          }
          if(prevPerson == "8"){
            setTotal(total - 19 + 13)
          }
          if(prevPerson == "9"){
            setTotal(total - 21 + 13)
          }
          if(prevPerson == "10"){
            setTotal(total - 23 + 13)
          }
          setPrevPerson("5")
          break;
        case 6 :
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
            setTotal(total - 9 + 15)
          }
          if(prevPerson == "4"){
            setTotal(total - 11 + 15)
          }
          if(prevPerson == "5"){
            setTotal(total - 13 + 15)
          }
          if(prevPerson == "6"){
            setTotal(total)
          }
          if(prevPerson == "7"){
            setTotal(total - 17 + 15)
          }
          if(prevPerson == "8"){
            setTotal(total - 19 + 15)
          }
          if(prevPerson == "9"){
            setTotal(total - 21 + 15)
          }
          if(prevPerson == "10"){
            setTotal(total - 23 + 15)
          }
          setPrevPerson("6")
          break;
        case 7 :
          if(prevPerson == ""){
            setTotal(total + 17);
          }
          if(prevPerson == "1"){
            setTotal(total - 5 + 17);
          }
          if(prevPerson == "2"){
            setTotal(total - 7 + 17)
          }
          if(prevPerson == "3"){
            setTotal(total - 9 + 17)
          }
          if(prevPerson == "4"){
            setTotal(total - 11 + 17)
          }
          if(prevPerson == "5"){
            setTotal(total - 13 + 17)
          }
          if(prevPerson == "6"){
            setTotal(total - 15 + 17)
          }
          if(prevPerson == "7"){
            setTotal(total)
          }
          if(prevPerson == "8"){
            setTotal(total - 19 + 17)
          }
          if(prevPerson == "9"){
            setTotal(total - 21 + 17)
          }
          if(prevPerson == "10"){
            setTotal(total - 23 + 17)
          }
          setPrevPerson("7")
          break;
        case 8 :
          if(prevPerson == ""){
            setTotal(total + 19);
          }
          if(prevPerson == "1"){
            setTotal(total - 5 + 19);
          }
          if(prevPerson == "2"){
            setTotal(total - 7 + 19)
          }
          if(prevPerson == "3"){
            setTotal(total - 9 + 19)
          }
          if(prevPerson == "4"){
            setTotal(total - 11 + 19)
          }
          if(prevPerson == "5"){
            setTotal(total - 13 + 19)
          }
          if(prevPerson == "6"){
            setTotal(total - 15 + 19)
          }
          if(prevPerson == "7"){
            setTotal(total - 17 + 19)
          }
          if(prevPerson == "8"){
            setTotal(total)
          }
          if(prevPerson == "9"){
            setTotal(total - 21 + 19)
          }
          if(prevPerson == "10"){
            setTotal(total - 23 + 19)
          }
          setPrevPerson("8")
          break;
        case 9 :
          if(prevPerson == ""){
            setTotal(total + 21);
          }
          if(prevPerson == "1"){
            setTotal(total - 5 + 21);
          }
          if(prevPerson == "2"){
            setTotal(total - 7 + 21)
          }
          if(prevPerson == "3"){
            setTotal(total - 9 + 21)
          }
          if(prevPerson == "4"){
            setTotal(total - 11 + 21)
          }
          if(prevPerson == "5"){
            setTotal(total - 13 + 21)
          }
          if(prevPerson == "6"){
            setTotal(total - 15 + 21)
          }
          if(prevPerson == "7"){
            setTotal(total - 17 + 21)
          }
          if(prevPerson == "8"){
            setTotal(total - 19 + 21)
          }
          if(prevPerson == "9"){
            setTotal(total)
          }
          if(prevPerson == "10"){
            setTotal(total - 23 + 21)
          }
          setPrevPerson("9")
          break;
        case 10 :
          if(prevPerson == ""){
            setTotal(total + 23);
          }
          if(prevPerson == "1"){
            setTotal(total - 5 + 23);
          }
          if(prevPerson == "2"){
            setTotal(total - 7 + 23)
          }
          if(prevPerson == "3"){
            setTotal(total - 9 + 23)
          }
          if(prevPerson == "4"){
            setTotal(total - 11 + 23)
          }
          if(prevPerson == "5"){
            setTotal(total - 13 + 23)
          }
          if(prevPerson == "6"){
            setTotal(total - 15 + 23)
          }
          if(prevPerson == "7"){
            setTotal(total - 17 + 23)
          }
          if(prevPerson == "8"){
            setTotal(total - 19 + 23)
          }
          if(prevPerson == "9"){
            setTotal(total - 21 + 23)
          }
          if(prevPerson == "10"){
            setTotal(total)
          }
          setPrevPerson("10")
          break;
      }
    if(item === "FI"){
      if(fondo != "FI"){
        setTotal(total + 3)
      }
    }
    if(item === "FNI"){
      if(fondo === "FI"){
        setTotal(total - 3)
      }
    }
    if(item === "CC"){
      if(plano != "CC"){
        setTotal(total + 2)
      }
    }
    if(item == "CA"){
      if(plano === "CC"){
        setTotal(total - 2)
      }
    }

    if(item === "Y"){
      if(texto != "Y"){
        setTotal(total + 1)
      }
    }

    if(item === "N"){
      if(texto === "Y"){
        setTotal(total - 1)
      }
    }
  }

  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow classes={classes} {...props} />;
  }
  const handleIlustD = (value) => {
    if(value === false){
      setQuiero("")
    }else{
      setQuiero("ILUST")
    }
    setIlustD(!ilustD) 
  }

  const alerta = (link) => {
    Swal.fire({
      title: 'Informacion Importante',
      text: "El precio puede tener una pequeña variacion, por favor enviar foto a ilustrar despues de este mensaje, gracias ❤️",
      icon: 'success',
      showCancelButton: false,
      cconfirmButtonColor: '#addbb2',
      confirmButtonText: 'Enviar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(link)
      }
    })
  }

  const alertaErrorCasillas = (e) => {
    Swal.fire({
      icon: 'error',
      title: 'Epaa...',
      text: 'Rellena esas casillas 😪 😫',
      showConfirmButton: false,
    })
  }


  const alertaErrorPA = (e) => {
    Swal.fire({
      icon: 'error',
      title: 'Epaa...',
      text: 'Selecciona personas o animales 🙄 😑',
      showConfirmButton: false,
    })
  }

  const alertaErrorInteres = (e) => {
    Swal.fire({
      icon: 'error',
      title: 'Epaa...',
      text: 'Seleccione en que esta interesado 👀 😤',
      showConfirmButton: false,
    })
  }


  const handleEnviar = (e) => {
    let link = ``
    if(quiero === ""){
      alertaErrorInteres()
    }
    if(quiero === "ILUST"){
      if(nombre && apellido && quiero && plano && fondo != "" && texto != "" && personas || animales ){
        link = `https://api.whatsapp.com/send?phone=584123405104&text=Holaaa%20♥♥♥♥♥♥♥♥♥♥♥%20Mi%20nombre%20es%20${nombre}%20,%20vivo%20en%20${apellido}%20.%20Quisiera%20pedirte%20una%20${quiero}%20con%20un%20plano%20de%20${plano}%20,%20con%20${personas}%20personas%20,%20con%20${animales}%20animales%20,%20con%20${fondo}%20,%20con%20${texto}%20texto%20y%20tendria%20un%20estimado%20de%20${total}$%20♥♥`
        alerta(link)
      }else{
        if(personas === 0 && animales === 0){
          alertaErrorPA()
        }else{
          alertaErrorCasillas()
        }
      }
    }
    if(quiero === "CUADRO"){
      if(nombre && apellido && quiero && plano && fondo != "" && texto != "" && tamano && personas || animales ){
        link = `https://api.whatsapp.com/send?phone=584123405104&text=Holaaa%20♥♥♥♥♥♥♥♥♥♥♥%20Mi%20nombre%20es%20${nombre}%20,%20vivo%20en%20${apellido}%20.%20Quisiera%20pedirte%20una%20${quiero}%20con%20un%20plano%20de%20${plano}%20,%20con%20${personas}%20personas%20,%20con%20${animales}%20animales%20,%20con%20${fondo}%20,%20con%20${texto}%20texto%20,%20el%20material%20seria%20de%20MDF%20,%20con%20un%20tamaño%20de%20${tamano}%20y%20tendria%20un%20estimado%20de%20${total}$%20♥♥`
        alerta(link)
      }else{
        if(personas === 0 && animales === 0){
          alertaErrorPA()
        }else{
          alertaErrorCasillas()
        }
      }
    }
    if(quiero === "PORT"){
      if(nombre && apellido && quiero && plano && fondo != "" && texto != "" && personas || animales){
        link = `https://api.whatsapp.com/send?phone=584123405104&text=Holaaa%20♥♥♥♥♥♥♥♥♥♥♥%20Mi%20nombre%20es%20${nombre}%20,%20vivo%20en%20${apellido}%20.%20Quisiera%20pedirte%20una%20${quiero}%20con%20un%20plano%20de%20${plano}%20,%20con%20${personas}%20personas%20,%20con%20${animales}%20animales%20,%20con%20${fondo}%20,%20con%20${texto}%20texto%20,%20con%20un%20tamaño%20de%2010x15%20y%20tendria%20un%20estimado%20de%20${total}$%20♥♥`
        alerta(link)
      }else{
        if(personas === 0 && animales === 0){
          alertaErrorPA()
        }else{
          alertaErrorCasillas()
        }
      }
    }
  }

  useEffect(()=>{
    setLoading(false)
  }, [])

  
  return (
  <Layout>
    <SEO title="Pedido" />
      {loading ? (
        <>
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
          <Loading/>
        </div>
        </>
      ):(
        <>
      <Image fileName="fondo3.PNG"/>
      <div style={{height: "100%"}} className={classes.divRow + " row d-flex justify-content-center align-items-center"}>
        <div className={classes.divForm + " col-10 p-3"}>
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <TextField onChange={(e)=> setNombre(e.target.value)} className={classes.textField} fullWidth id="standard-basic" label="Nombre y Apellido" />
            </div>
            <div className="col-10 mt-2">
              <TextField onChange={(e)=> setApellido(e.target.value)} fullWidth id="standard-basic" label="Pais" />
            </div>
            <div className="col-12 mt-4">
              <p className={classes.labelForm}>Estoy interesado en ...</p>
            </div>
            <div className="col-10">
              {quiero === "CUADRO" || quiero === "PORT" ? (
                <FormControlLabel
                onChange={(e)=> handleIlustD()}
                checked={ilustD}
                disabled
                className={classes.checkbox}
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="ID" />}
                label="Ilustracion Digital"
              />
              ):(
                <FormControlLabel
                onChange={(e, value)=> handleIlustD(value)}
                checked={ilustD}
                className={classes.checkbox}
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="ID" />}
                label="Ilustracion Digital"
              />
              )
              }
            </div>
            <div className="col-10">
              <FormControlLabel
                onChange={(e, value)=> handleCuadro(value)}
                checked={cuadro}
                className={classes.checkbox}
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="C" />}
                label="Cuadro"
              />
            </div>
            <div className="col-10">
              <FormControlLabel
                onChange={(e, value)=> handlePorta(value)}
                checked={porta}
                className={classes.checkbox}
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="PT" />}
                label="Portarretrato"
              />
            </div>
            <div className="col-12 mt-4">
            <Typography className={classes.labelForm} gutterBottom>Plano de las personas</Typography>
            </div>
            <div className="col-10">
            <RadioGroup aria-label="plano" name="plano" value={plano} onChange={(e) => handlePlano(e)}>
                <FormControlLabel value="CC" control={<Radio icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="Cuerpo completo" />
                <FormControlLabel value="CA" control={<Radio icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="Cuello para arriba" />
            </RadioGroup>
            </div>
            <div className="col-12 mt-4">
            <Typography className={classes.labelForm} gutterBottom>Cantidad de Personas</Typography>
            </div>
            <div className="col-10">
              <PrettoSlider 
                valueLabelDisplay="auto" 
                aria-label="pretto slider"
                // getAriaValueText={handlePersonas} 
                step={1} 
                min={0}
                marks
                max={10} 
                defaultValue={0} 
                onChange={(e, value) => handlePersonas(e, value)}
                />
            </div>
            <div className="col-12 mt-4">
            <Typography className={classes.labelForm} gutterBottom>Cantidad de Animales</Typography>
            </div>
            <div className="col-10">
              <PrettoSlider 
                valueLabelDisplay="auto" 
                aria-label="pretto slider"
                // getAriaValueText={handlePersonas} 
                step={1} 
                min={0}
                marks
                max={5} 
                defaultValue={0} 
                onChange={(e, value) => handleAnimales(e, value)}
                />
            </div>
            <div className="col-12 mt-3">
              <p className={classes.pInfoFondo}>Pulsa el titulo para mas informacion</p>
            <BootstrapTooltip title={textoFondo} placement="top-start">
              <Typography noWrap={true} className={classes.labelForm} gutterBottom>Desea ilustrar el fondo?</Typography>
            </BootstrapTooltip>

            </div>
            <div className="col-10">
            <RadioGroup aria-label="fondo" name="fondo" value={fondo} onChange={(e) => handleFondo(e)}>
                <FormControlLabel value="FI" control={<Radio icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="Si" />
                <FormControlLabel value="FNI" control={<Radio icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="No" />
            </RadioGroup>
            </div>
            <div className="col-12 mt-3">
              <Typography className={classes.labelForm} gutterBottom>Desea texto?</Typography>
            </div>
            <div className="col-10">
            <RadioGroup aria-label="fondo" name="fondo" value={texto} onChange={(e) => handleTexto(e)}>
                <FormControlLabel value="Y" control={<Radio icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="Si" />
                <FormControlLabel value="N" control={<Radio icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="No" />
            </RadioGroup>
            </div>
            {cuadro && 
            <>
            <div className="col-12 mt-3">
              <Typography className={classes.labelForm} gutterBottom>Material del cuadro</Typography>
            </div>
            <div className="col-10">
              {/* <RadioGroup aria-label="fondo" name="fondo" value={material} onChange={(e) => handleMaterial(e)}>
                  <FormControlLabel value="MDF" control={<Radio />} label="MDF" />
                  <FormControlLabel value="PVC" control={<Radio />} label="PVC" />
              </RadioGroup> */}
              <Typography className={classes.labelMaterial} gutterBottom>MDF *madera lisa de 3cm de grosor*</Typography>
            </div>
            <div className="col-12 mt-3">
              <Typography className={classes.labelForm} gutterBottom>Tamaño del Cuadro</Typography>
            </div>
            <div className="col-10">
            <RadioGroup aria-label="fondo" name="fondo" value={tamano} onChange={(e) => handleTamano(e)}>
                <FormControlLabel value="20x20" control={<Radio icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="20x20" />
                <FormControlLabel value="30x20" control={<Radio icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="30x20" />
                <FormControlLabel value="40x30" control={<Radio icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="40x30" />
                <FormControlLabel value="50x40" control={<Radio icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="50x40" />
            </RadioGroup>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <p className={classes.pCuadro}>♥ Todos los cuadros vienen con su envoltorio listo para regalar ♥</p>
            </div>
            </>
            }
            {porta &&
            <>
              <div className="col-12 mt-3">
              <Typography className={classes.labelForm} gutterBottom>Tamaño del Portarretrato</Typography>
            </div>
            <div className="col-10">
              <Typography className={classes.labelMaterial} gutterBottom>10 x 15 cm</Typography>
            </div>
            </>
            }
          </div>
        </div>
        <div className={classes.divTotal}>
        <div className="d-flex justify-content-center align-items-center" style={{width: "100%", height: "100%"}}>
            <p className={classes.pTotal}>{"Total: " + total + "$"}</p>
        </div>
        </div>
        <div onClick={handleEnviar} className={classes.divEnviar}>
          <div className="d-flex justify-content-center align-items-center" style={{width: "100%", height: "100%"}}>
            <p className={classes.pEnviar}>Enviar</p>
          </div>
        </div>
      </div>
        </>
      )
      }
  </Layout>
)
}
export default SecondPage
