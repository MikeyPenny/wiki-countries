import React from 'react';
// import countries from '../countries.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './country.css';

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
            <Container className="country-data">
                <Row>
                    <Col><h2>{countryJsx.name.common}</h2></Col>
                </Row>
                <Row>
                    <Col><h4>Capital: </h4></Col>
                    <Col><h4>{countryJsx.capital}</h4></Col>
                </Row>
                <Row>
                    <Col><h4>Area: </h4></Col>
                    <Col><h4>{countryJsx.area}</h4></Col>
                </Row>
                <Row>
                    <Col><h4>Borders: </h4></Col>
                    <Col>
                        <ul className="border-list">
                            {bordersJsx}
                        </ul>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}