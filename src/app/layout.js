"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/header";
import { useEffect, useState } from "react";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });



const baseurl = process.env.url
export default function RootLayout({ children }) {
  const [isLoggedin, setIsLoggedin] = useState(false)
  // const testValue = localStorage.getItem('testKey');
  // setIsLoggedin(testValue)


  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />


        <title>Assigning Jobs</title >


        <link id="style" href={`${baseurl}/plugins/bootstrap/css/bootstrap.min.css`} rel="stylesheet" />


        <link href={`${baseurl}/css/style.css`} rel="stylesheet" />
        <link href={`${baseurl}/css/dark-style.css`} rel="stylesheet" />
        <link href={`${baseurl}/css/transparent-style.css`} rel="stylesheet" />


        <link href={`${baseurl}/css/icons.css`} rel="stylesheet" />

        <link href={`${baseurl}/plugins/select2/select2.min.css`} rel="stylesheet" />


        <link href={`${baseurl}/plugins/pscrollbar/pscrollbar.css`} rel="stylesheet" />


        <link id="theme" rel="stylesheet" type="text/css" media="all" href={`${baseurl}/color-skins/color-skins/color10.css`} />
        <link rel="stylesheet" href={`${baseurl}/color-skins/demo.css`} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>


        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous" />
      </head>

      <body>
        {/* <Header /> */}
        {children}
        {/* {isLoggedin ? (<>{children}</>) : (<><Home /></>)} */}
        <Script src={`${baseurl}/js/vendors/jquery.min.js`} defer />


        <Script src={`${baseurl}/plugins/bootstrap/js/popper.min.js`} defer />
        <Script src={`${baseurl}/plugins/bootstrap/js/bootstrap.min.js`} defer />


        <Script src={`${baseurl}/js/vendors/jquery.sparkline.min.js`} defer />

        <Script src={`${baseurl}/js/vendors/circle-progress.min.js`} defer />


        <Script src={`${baseurl}/plugins/owl-carousel/owl.carousel.js`} defer />
        <Script src={`${baseurl}/js/owl-carousel.js`} defer />

        <Script src={`${baseurl}/plugins/horizontal/horizontal-menu/horizontal.js`} defer />
        <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous" defer />
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous" defer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous" defer />

        <Script src={`${baseurl}/js/jquery.touchSwipe.min.js`} defer />


        <Script src={`${baseurl}/plugins/select2/select2.full.min.js`} defer />
        <Script src={`${baseurl}/js/select2.js`} defer />


        {/* <script src="js/sticky.js" defer /> */}


        <Script src={`${baseurl}/plugins/cookie/jquery.ihavecookies.js`} defer />
        <Script src={`${baseurl}/plugins/cookie/cookie.js`} defer />


        <Script src={`${baseurl}/plugins/pscrollbar/pscrollbar.js`} defer />


        <Script src={`${baseurl}/js/swipe.js`} defer />


        <Script src={`${baseurl}/js/scripts2.js`} defer />


        <Script src={`${baseurl}/js/themecolors.js`} defer />
        <Script src={`${baseurl}/js/custom.js`} defer />


      </body>



    </html >

  )
}
