import React, { Component } from 'react';
import './home.css';
// import countries from '../countries.json';
import { Route, Link } from 'react-router-dom';
import Country from './Country';
import Axios from 'axios';

class Home extends Component {



    state = {
        countries : []
    }

    componentDidMount() {
        Axios.get("http://localhost:3001/countries/")
        .then(response => {
            this.setState({ countries : response.data })
        })
    }

    render() {
        let countriesJsx;
        if(this.state.countries) {
            countriesJsx = this.state.countries.map((country) =>
            <Link key={country.cca3} to={{
              pathname: `/details/${country.cca3}`,
               query: {
                name: country.name,
                capital: country.capital
               }
            }} >
                {country.name.common}
            </Link>
            )      
        } else {
            countriesJsx = <h1>Loading</h1>
        }

        return (
            <div className="home-dashboard">
                <aside className="menu">
                    <p className="menu-label">
                        Countries
                    </p>
                    <ul className="menu-list">
                        {countriesJsx}
                    </ul>
                </aside>
                <div className="dashboard-view">
                    {/* <Route exact path="/" render={(props) => <Country {...props} countries={this.state.countries}/>} /> */}
                    <Route path={`/details/:country`} render={(props) => <Country {...props} countries={this.state.countries}/>}  ></Route>
                </div>
            </div>
        )

    }

}

export default Home;