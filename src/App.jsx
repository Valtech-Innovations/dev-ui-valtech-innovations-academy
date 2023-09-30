
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import pageNotFound from './pages/pageNotFound';

import AboutPage from './pages/aboutPage';
import HomePage from './pages/homePage';
import CoursesPage from './pages/coursePage';
import ContacPage from './pages/contactPage';
import Carousel from './container/carousel';
import Testimonial from './container/testimonial';




function App() {


  return (
    <>
    {/* <Testimonial/> */}
    {/* <Carousel />  */}
        <Router>
          <Routes>
          <Route path="*" element={<pageNotFound/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContacPage />} />
          </Routes>
      </Router>

{/* not work*/}

{/* <Testimonial />  */}





</>


  )
}

export default App
