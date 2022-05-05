import logo from './logo.svg';
import './App.css';

import Person from './components/Person';

function App() {
  return (
    <div className="Person">
      <Person name={"Jane, Doe"} age={45} hair={"black"}>
        <p>Testing children thingy</p>
      </Person>
      <Person name={"Smith, John"} age={88} hair={"Brown"}></Person>
      {/* <Person></Person> */}
    </div>
  );
}

export default App;
