import React from 'react';
import { Link, useParams } from 'react-router-dom';
import countries from '../countries.json';

function CountriesDetails() {
  const params = useParams(); // armazena só a string recebida pelo Route ":countryId"
  
  const foundCountry = countries.find((currentCountryObj) => {
    return currentCountryObj.cca3 === params.countryId;
  }); // armazena o objeto completo do país achado

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((currentBorderCca3) => {
                    const borderCountryObj = countries.find((currentCountryObj) => {
                        return currentCountryObj.cca3 === currentBorderCca3;
                      }); // armazena o objeto completo a partir da string do border
                  return (
                    <li key={currentBorderCca3}>
                      <Link to={`/${currentBorderCca3}`}>{borderCountryObj.name.common}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountriesDetails;
