import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import fondo2 from "../images/fondo2.jpg"
import Image from "../components/image"
import "./custom.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Pedido" />
      <Image fileName="fondo3.PNG"/>
      <Link to="/">back</Link>


  </Layout>
)

export default SecondPage
