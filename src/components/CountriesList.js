// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function CountriesList(props) {
  const countries = props.countries;

  return countries.map((currentCountry) => {
    return (
      <div key={currentCountry.cca3} className="list-group">
        <NavLink
        // O NavLink é um componente de navegação especial que "sabe" quando a rota atual do navegador é a rota que ele redireciona. Dessa forma, podemos usar a prop especial "isActive" pra passar estilos customizados quando esse NavLink estiver ativo
        className={(activeProps) =>
          `list-group-item list-group-item-action ${
            activeProps.isActive ? 'active' : ''
          }`
        }
          to={currentCountry.cca3}
        >
          <div className="countries-list">
            <div>{currentCountry.flag}</div>
            <div>{currentCountry.name.common}</div>
          </div>
        </NavLink>
      </div>
    );
  });
}

export default CountriesList;
