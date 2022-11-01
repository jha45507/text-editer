
import './App.css';
import TextUtils from './components/TextUtils';
import TextReader from './components/TextReader';

import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App(props) {

  return (
    <>
      <Router>
        <TextUtils />
        
        <Routes>
          <Route path="/" element={<TextReader />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
