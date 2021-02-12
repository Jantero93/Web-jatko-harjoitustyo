import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// stateen muuttuja api kutsun lataamisesta ja koska valmis
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
      color: "white",
    };
  }

  clockTimeFromDateObject(dateObject) {
    var time;
    if (dateObject.getMinutes() < 10) {
      time = dateObject.getHours() + ":" + "0" + dateObject.getMinutes();
    } else {
      time = dateObject.getHours() + ":" + dateObject.getMinutes();
    }
    return time;
  }

  getWeather = async (color) => {

    // tampere
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=634964&appid=881e2e4957f0b379389af22826a33532&units=metric`
    );
    const response = await api_call.json();

    let timeNow = new Date(); // aika nyt

    // muuta date objectin kellon ajoiksi
    // sunset & sunrise tulee mikrosekunteinta epochista
    timeNow = this.clockTimeFromDateObject(timeNow);
    let sunset = this.clockTimeFromDateObject(
      new Date(1000 * response.sys.sunset)
    );
    let sunrise = this.clockTimeFromDateObject(
      new Date(1000 * response.sys.sunrise)
    );

    //tekstin väri, parametrina
    // statessa, piti tehdä dynaamisuutta siihen liittyen
    color = "white";

    this.setState({
      time: timeNow,
      temp: response.main.temp,
      place: response.name,
      feels_like: response.main.feels_like,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      sunrise: sunrise,
      sunset: sunset,
      color: color,
    });
  };

  componentDidMount() {
    this.getWeather();
  }

  /* Korteista oma komponentti */
  render() {
    return (
      <div className="website">
        <Container fluid="true" style={{ marginLeft: "1rem" }}>
          <Row>
            {/*Aika*/}
            <Card
              bg="secondary"
              text={this.state.color}
              style={{ width: "15rem" }}
              className="m-1"
            >
              <Card.Header>Time</Card.Header>
              <Card.Body>
                <Card.Title>{this.state.time} </Card.Title>
              </Card.Body>
            </Card>

            {/* Lämpötila */}
            <Card
              bg="danger"
              text={this.state.color}
              style={{ width: "15rem" }}
              className="m-1"
            >
              <Card.Header>Temperature</Card.Header>
              <Card.Body>
                <Card.Title>
                  {" "}
                  {Math.round(this.state.temp * 10) / 10} celsius{" "}
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              bg="info"
              text={this.state.color}
              style={{ width: "15rem" }}
              className="m-1"
            >
              <Card.Header>Humidity</Card.Header>
              <Card.Body>
                <Card.Title>{this.state.humidity} % </Card.Title>
              </Card.Body>
            </Card>

            {/*Auringon nousu*/}
            <Card
              bg="success"
              text={this.state.color}
              style={{ width: "15rem" }}
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
              bg="secondary"
              text={this.state.color}
              style={{ width: "15rem" }}
              className="m-1"
            >
              <Card.Header>City</Card.Header>
              <Card.Body>
                <Card.Title>{this.state.place} </Card.Title>
              </Card.Body>
            </Card>

            {/* Miltä tuntuu */}
            <Card
              bg="danger"
              text={this.state.color}
              style={{ width: "15rem" }}
              className="m-1"
            >
              <Card.Header>Feels like</Card.Header>
              <Card.Body>
                <Card.Title>
                  {" "}
                  {Math.round(this.state.feels_like * 10) / 10} celsius
                </Card.Title>
              </Card.Body>
            </Card>

            {/*Kuvaus*/}
            <Card
              bg="info"
              text={this.state.color}
              style={{ width: "15rem" }}
              className="m-1"
            >
              <Card.Header>Description</Card.Header>
              <Card.Body>
                <Card.Title>{this.state.description} </Card.Title>
              </Card.Body>
            </Card>

            {/* Auringonlasku */}
            <Card
              bg="success"
              text={this.state.color}
              style={{ width: "15rem" }}
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
