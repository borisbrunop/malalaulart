import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import fondo2 from "../images/fondo2.jpg"
import Image from "../components/image"
const SecondPage = () => (
  <Layout>
    <SEO title="Pedido" />
    <div
      style={{
      position: `absolute`,
      height: `100%`,
      width: `100%`,
      }}
    >
      <Link to="/">back</Link>
      <Image/>
    </div>
  </Layout>
)

export default SecondPage
