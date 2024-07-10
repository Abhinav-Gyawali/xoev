import './App.css';
import Home from './brand/Home';
import About from './brand/About';
import Contact from './brand/Contact';
import NotFound from './error/NotFound';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* Handle 404 - Not Found */}
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
};

export default App;