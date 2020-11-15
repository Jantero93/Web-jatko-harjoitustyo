import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class Weather extends Component {
    constructor() {
        super();
        this.state = {
            time: null,
            temp: null,
            place: "",
            feels_like: null,
            humidity: null,
            description: "",
            sunrise: null,
            sunset: null,
            color: 'white',
           
        };
     //   this.getWeather();

    }
    // ehkä oikea https://api.openweathermap.org/data/2.5/weather?id=32906&appid=881e2e4957f0b379389af22826a33532&units=metric
    // siilinjärvi  https://api.openweathermap.org/data/2.5/weather?id=636947&appid=881e2e4957f0b379389af22826a33532&units=metric
    getWeather = async () => {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=634964&appid=881e2e4957f0b379389af22826a33532&units=metric`)
        const response = await api_call.json();
    
        let today = new Date();
        let sunset = response.sys.sunset;
        let sunrise = response.sys.sunrise;

       console.log("auringonnousu",response.sys.sunrise);

        let time;
        if (today.getMinutes() < 10) {
            time = today.getHours() + ":" + '0' + today.getMinutes();
        } else {
            time = today.getHours() + ":" + today.getMinutes();
        }
        // unix aika oikeaksi ajaksi, auringonlasku
        today = new Date(1000 * sunset);

        if (today.getMinutes() < 10) {
            sunset = today.getHours() + ":" + '0' + today.getMinutes();
        } else {
            sunset = today.getHours() + ":" + today.getMinutes();
        }



       
        today = new Date(1000 * sunrise);

        if (today.getMinutes() < 10) {
            sunrise = today.getHours() + ":" + '0' + today.getMinutes();
        } else {
            sunrise = today.getHours() + ":" + today.getMinutes();
        }

        //sunrise = today.getHours() + ":" + today.getMinutes();

        //console.log('lampotila: ',this.temp)

        this.setState({
            time: time,
            temp: response.main.temp,
            place: response.name,
            feels_like: response.main.feels_like,
            humidity: response.main.humidity,
            description: response.weather[0].description,
            sunrise: sunrise,
            sunset: sunset,
            color: 'white',
           
        });
    }
  
    
    componentDidMount(){
        this.getWeather();
    }

    render() {
        return (
            <div className="website">
            <Container
            fluid="true"
            style={{marginLeft: "1rem"}}           
            >

                <Row>
                    {/*Aika*/}
                    <Card
                        bg='secondary'
                        text={this.state.color}
                        style={{ width: '15rem' }}
                        className="m-1"
                    >
                        <Card.Header>Time</Card.Header>
                        <Card.Body>
                            <Card.Title>{this.state.time} </Card.Title>
                        </Card.Body>
                    </Card>



                    {/* Lämpötila */}
                    <Card
                        bg='danger'
                        text={this.state.color}
                        style={{ width: '15rem' }}
                        className="m-1"
                    >
                        <Card.Header>Temperature</Card.Header>
                        <Card.Body>
                            <Card.Title> {Math.round(this.state.temp * 10) / 10} celsius </Card.Title>
                        </Card.Body>
                    </Card>


                    <Card
                        bg='info'
                        text={this.state.color}
                        style={{ width: '15rem' }}
                        className="m-1"
                    >
                        <Card.Header>Humidity</Card.Header>
                        <Card.Body>
                            <Card.Title>{this.state.humidity} % </Card.Title>
                        </Card.Body>
                    </Card>

                    {/*Auringon nousu*/}
                    <Card
                        bg='success'
                        text={this.state.color}
                        style={{ width: '15rem' }}
                        className="m-1"
                    >
                        <Card.Header>Sunrise</Card.Header>
                        <Card.Body>
                            <Card.Title> {this.state.sunrise}</Card.Title>
                        </Card.Body>
                    </Card>

                </Row>

                <Row>

                    {/*Paikka*/}
                    <Card
                        bg='secondary'
                        text={this.state.color}
                        style={{ width: '15rem' }}
                        className="m-1"
                    >
                        <Card.Header>City</Card.Header>
                        <Card.Body>
                            <Card.Title>{this.state.place} </Card.Title>
                        </Card.Body>
                    </Card>


                    {/* Miltä tuntuu */}
                    <Card
                        bg='danger'
                        text={this.state.color}
                        style={{ width: '15rem' }}
                        className="m-1"
                    >
                        <Card.Header>Feels like</Card.Header>
                        <Card.Body>
                            <Card.Title> {Math.round(this.state.feels_like * 10) / 10} celsius</Card.Title>
                        </Card.Body>
                    </Card>

                    {/*Kuvaus*/}
                    <Card
                        bg='info'
                        text={this.state.color}
                        style={{ width: '15rem' }}
                        className="m-1"
                    >
                        <Card.Header>Description</Card.Header>
                        <Card.Body>
                            <Card.Title>{this.state.description}  </Card.Title>
                        </Card.Body>
                    </Card>

                    {/* Auringonlasku */}
                    <Card
                        bg='success'
                        text={this.state.color}
                        style={{ width: '15rem' }}
                        className="m-1"
                    >
                        <Card.Header>Sunset</Card.Header>
                        <Card.Body>
                            <Card.Title> {this.state.sunset}</Card.Title>
                        </Card.Body>
                    </Card>

                </Row>
            </Container>
            </div>
        );
    }

}

