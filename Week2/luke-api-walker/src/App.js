import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        {/* <Router> */}
          <People path="/people/:id" />
          <Planet path='/planet/:id' />
        {/* </Router> */}
      </div>
    </BrowserRouter>
  );
}

export default App;