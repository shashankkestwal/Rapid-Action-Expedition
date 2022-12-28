import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import LandingPage from "./LandingPage.js"
import About from "./About.js"
import NotFound from "./NotFound.js"
import Footer from "./Footer/footer.js"

function App() {
  return (
    <Router >
      <Routes>
        <Route path='/' element={< LandingPage />}></Route>

        <Route path='/About' element={< About />}></Route>
        <Route path='*' component={ <NotFound/> } />

      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;
