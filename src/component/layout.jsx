import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
function Layout({children}){
    return(<>
     <div className='centre_wr'>
     <Navbar/>
     {children}
     <Footer />

     </div>
   
    </>)
}
export default Layout