import Linn from './Linn';
import pariisPilt from './pildid/pariis-pilt.jpg'

import './App.css';

const LINNAD = [
  {
    nimi: 'Pariis',
    kirjeldus: "Paris (English: /ˈpærɪs/; French pronunciation: [paʁi] ⓘ) is the capital and most populous city of France. With an official estimated population of 2,102,650 residents as of 1 January 2023[2] in an area of more than 105 km2 (41 sq mi),[5] Paris is the fifth-most populated city in the European Union and the 30th most densely populated city in the world in 2022.[6] Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas. For its leading role in the arts and sciences, as well as its early and extensive system of street lighting, in the 19th century, it became known as the City of Light.[7]",
    pilt: pariisPilt
  },
];

const App = () => (
  <div className="App">
    <Linn andmed={LINNAD[0]} />
  </div>
);

export default App;
