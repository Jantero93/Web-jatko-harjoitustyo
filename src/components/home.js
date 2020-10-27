import React, { Component } from "react";
import dog_picture from './dog_picture1.jpeg';


export default class Home extends Component {
    render() {
        return (
            <div className="website" style={{margin: 20}}>
                <h1 className="home_text" >
                Welcome to my website
                <br></br>
                This is picture of our dog (he is sleeping)
                </h1>
                <br></br>
                <img src={dog_picture} alt="dog_picture" />
            </div>
        );
    }

}