import axios from 'axios';
import { Component } from 'react';
import Spinner from './Spinner';

class Weather extends Component {
    constructor() {
        super()
        this.state = {
            lat: null,
            lon: null,
            errMessage: ""
        };
        this.state = {
            name: null,
            country: null,
            icon: null,
            temp: null,
            description: null,
        }
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude, lon: position.coords.longitude })
            },
            err => {
                this.setState({ errMessage: err.message })
            }
        )

    }
    renderContent() {
        if (this.state.errMessage && !this.state.lat && !this.state.lon) {
            return <p>Error:{this.state.errMessage}</p>
        }
        if (!this.state.errMessage && this.state.lat && this.state.lon) {
            var apiKey = "6be64554eb49637be2a0a35ebc923cd0";
            var url = `http://api.openweathermap.org/data/2.5/weather?lang=vi&lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${apiKey}`

            axios.get(url)
                .then((response) => {

                    this.setState({
                        name: response.data.name,
                        country: response.data.sys.country,
                        icon: response.data.weather[0].icon,
                        temp: response.data.main.temp,
                        description: response.data.weather[0].description
                    })
                    // console.log(this.state.weather);
                })
            return <div className="city">
                <h4 className="city-name">
                    <span>{this.state.name}</span>
                    <sup>{this.state.country}</sup>
                </h4>
                <div className="city-temp">
                    {Math.round(this.state.temp)}
                    <sup>&deg;C</sup>
                </div>
                <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.description} />
                    <p>{this.state.description}</p>
                </div>
            </div>
        }
        return <Spinner message="Please accept location request" />
    }
    render() {
        return <div>{this.renderContent()}</div>

    }
}

export default Weather