import React from "react"
import Layout from "../component/layout"
import Header from "../container/Header"
import Services from "../container/services"
import About from "../container/about"
import Team from "../container/team"
function AboutPage(){
    return(<>
    <Layout>
    <Header name="About Us"/>
    <Services/>
    <About/>
    <Team/>
    </Layout>
    </>)
}
export default AboutPage