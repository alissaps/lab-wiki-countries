import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router';
import countries from './countries.json';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:countryId" element={<CountryDetails countries={countries}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
