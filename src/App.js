
import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import AddNote from "./components/add-note.component";
import NotesList from "./components/note-list.component";

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

