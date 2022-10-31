
import './App.css';
import TextUtils from './components/TextUtils';
import TextReader from './components/TextReader';
import ShowAlert from './components/ShowAlert';
import About from './components/About';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App(props) {
  const [alert, setalert] = useState(null);
  const shouAlert = (message, type) => {
    setalert({
      smg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  return (
    <>
      <Router>
        <TextUtils />
        <ShowAlert alert={alert} />
        <Routes>
          <Route path="/" element={<TextReader shouAlert={shouAlert} />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
