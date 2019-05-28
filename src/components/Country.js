import React from 'react';
// import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default function Country({match, history, countries, location}) {
    
    let countryArr = countries;
    
    let countryJsx = countryArr.filter((country) => match.params.country === country.cca3)[0]; 
    
    let bordersJsx;
    if (countryJsx.borders.length === 0) {
        bordersJsx = 0;
    } else {

        bordersJsx = countryJsx.borders.map((border) => {
            
            let countryName = countryArr.filter((country) => country.cca3 === border)[0].name.common;
            
            return <Link 
            to={`/details/${border}`} key={border}>{countryName}</Link>
        });
    }
    
    
    return (
        <div>
            <div className="country-data">
                <h2>{countryJsx.name.common}</h2>
                <h4>Capital: <span>{countryJsx.capital}</span></h4>
                <h4>Area: <span>{countryJsx.area}</span></h4>
                <h4>Borders: </h4>
                {bordersJsx}
            </div>
            
        </div>
    )
}