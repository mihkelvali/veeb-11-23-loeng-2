import Linn from './Linn';
import { LINNAD } from './andmed';

import './App.css';

const App = () => (
  <div className="App">
    {
      LINNAD.map((linn) => (
        <Linn key={linn.nimi} linn={linn} />
      ))
    }
  </div>
);

export default App;
