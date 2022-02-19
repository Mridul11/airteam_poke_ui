import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PagesHeader } from '../components';
import { About, App } from '../pages';

const AppRoutes = () => (
  <>
    <Router>
      <PagesHeader />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about/:id' element={<About />} />
      </Routes>
    </Router>
  </>
);

export default AppRoutes;
