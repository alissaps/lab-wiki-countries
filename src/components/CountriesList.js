import { Link } from 'react-router-dom';

function CountriesList(props) {
  const countries = props.countries;

  return countries.map((currentCountry) => {
    return (
      <div key={currentCountry.cca3} className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to={currentCountry.cca3}
        >
          <div className="countries-list">
            <div>{currentCountry.flag}</div>
            <div>{currentCountry.name.common}</div>
          </div>
        </Link>
      </div>
    );
  });
}

export default CountriesList;
