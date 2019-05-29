import React, { Component } from 'react';
import './home.css';
// import countries from '../countries.json';
import { Route, Link } from 'react-router-dom';
import Country from './Country';
import Axios from 'axios';

class Home extends Component {



    state = {
        countries : [],
        btnStyle:""
    }

    componentDidMount() {
        Axios.get("http://localhost:3001/countries/")
        .then(response => {
            this.setState({ countries : response.data })
        })
    }

    changeColourBtn = (e) => {
        const siblings = e.target.parentNode.childNodes;
        
        for(let i = siblings.length -1; i >= 0; i--) {
            
            if(siblings[i].style.backgroundColor === "rgb(0, 123, 255)"){
                siblings[i].style = "background-color: none;"
                break;
            }
        }
        e.target.style = "background-color: #007bff;"

    }

    render() {
        let countriesJsx;
        if(this.state.countries) {
            countriesJsx = this.state.countries.map((country) =>
            <Link key={country.cca3}
            onClick={(e) => this.changeColourBtn (e)}

            to={{
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
                <div className="side-bar scrollbar scrollbar-primary">
                    {countriesJsx}
                </div>
                <div className="dashboard-view">
                    {/* <Route exact path="/" render={(props) => <Country {...props} countries={this.state.countries}/>} /> */}
                    <Route path={`/details/:country`} render={(props) => <Country {...props} countries={this.state.countries}/>}  ></Route>
                </div>
            </div>
        )

    }

}

export default Home;