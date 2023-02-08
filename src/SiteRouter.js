import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './LandingPage';
import AboutPage from './About';
// import ContactPage from './pages/ContactPage';

// import PanchkarmaPage from './pages/PanchkarmaPage';
// // import RetreatPage from './pages/RetreatPage';
// import AtharvaRetreatPage from './pages/AtharvaRetreatPage';
// import CoursePage from './pages/CoursePage';

export default class SiteRouter extends React.Component {
  render() {
    return <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
{/*        <Route path="/panchkarma" element={<PanchkarmaPage />} />
        <Route path="/retreat" element={<AtharvaRetreatPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/contact" element={<ContactPage />} />*/}
      </Routes>
    </BrowserRouter>
  }
}