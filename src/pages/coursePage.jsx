import Layout from "../component/layout"
import Header from "../container/Header"
import Categories from "../container/categories"
import Courses from "../container/courses"
import Testimonial from "../container/testimonial"

function CoursesPage(){
    return(<>
    <Layout>
        <Header name="Courses" />
        <Categories/>
        <Courses/>
        {/* <Testimonial/> */}
    </Layout>
    </>)
}
export default CoursesPage
