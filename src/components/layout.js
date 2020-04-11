import React from "react"
import Helmet from 'react-helmet'
import '../styles.css'

import Nav from '../components/nav'
import Footer from '../components/footer'

const Layout = ({ children }) => {
  

  return (
    <>
        <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Caveat|Gochi+Hand|Kalam|Pangolin&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Allan&family=Bad+Script&family=Shadows+Into+Light+Two&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Baloo+2|Sen&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Baloo+2&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link href="https://fonts.googleapis.com/css?family=PT+Sans|Roboto:400,700&display=swap" rel="stylesheet" /> 
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
          </Helmet>
        <Nav/>
          <main>{children}</main>
        <Footer/>
    </>
  )
}

export default Layout
