import React from "react";
import Layout from "../component/layout";
import Carousel from "../container/carousel";
import Service from "../container/services";
import About from "../container/about";
import Categories from "../container/categories"
import Courses from "../container/courses"
import Team from "../container/team"
import Testimonial from "../container/testimonial";


function HomePage(){
    return(<>
   
    <Layout>
        <Carousel/>
        <Service />
        <About />
        <Categories />
        <Courses/>
        <Team/>
        {/* <Testimonial/> */}
    </Layout>
    </>)
}
export default HomePage;