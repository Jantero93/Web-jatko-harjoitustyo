
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar, Nav, NavItem, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

//import Card from 'react-bootstrap/Button';


import AddNote from "./components/add-note.component";
import NotesList from "./components/note-list.component";
//import Weather_station from "./components/weather_station";
import Home from "./components/home";
import Weather from "./components/weather";

class App extends Component {
  render() {
    return (
      
      <div className="website">

        <Navbar bg="dark" expand="sm" text="white">


          <Navbar.Brand href="/"><p1
            style={{ color: "goldenrod" }}
          >
            <strong> Home</strong>
          </p1></Navbar.Brand>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <Nav.Link href="/messages"><p1 style={{ color: "white" }}>Messages</p1></Nav.Link>
              <Nav.Link href="/add"><p1 style={{ color: "white" }}>Add message</p1></Nav.Link>
              <Nav.Link href="/weather"><p1 style={{ color: "white" }}>Weather Station</p1></Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Navbar>

























        {/* 
        <nav className="navbar navbar-expand navbar-dark bg-dark">         
      

          <div className="navbar-nav mr-auto">

          <li className="nav-item">
              <Link to={"/"} className="nav-link">
               <h2 className="navBartext"
               style={{color: "goldenrod"}}
               > Home </h2>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/notes"} className="nav-link">
               <h2 className="navBartext"> Notes </h2>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
               <h2 className="navBartext">Add note </h2> 
              </Link>
            </li>

            <li className="nav-item">
            <Link to={"/weather"} className="nav-link">
               <h2 className="navBartext"> Weather </h2>
              </Link>
            </li>     

          </div>

         



        </nav>

       */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/messages" component={NotesList} />
          <Route exact path="/add" component={AddNote} />
          <Route exact path="/weather" component={Weather} />
        </Switch>


      </div>
    );
  }
}


export default App;

