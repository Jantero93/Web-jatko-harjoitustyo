import React, { Component } from "react";
import NoteDataService from "../services/note.service";

export default class AddNote extends Component {
  constructor(props) {
    
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.newNote = this.newNote.bind(this);

    this.state = {
      title: "",
      description: "",
     
    };
  }

  onChangeTitle(newTitle) {
    this.setState({
      title: newTitle.target.value,
    });
  }

  onChangeDescription(newDescription) {
    this.setState({
      description: newDescription.target.value,
    });
  }

  saveNote() {
    let data = {
      title: this.state.title,
      description: this.state.description    
    };

    //pushataan databaseen
    NoteDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //alustetaan uusi note
  newNote() {
    this.setState({
      title: "",
      description: "",     
      submitted: false
    });
  }

  render() {
    return (
      //näytetään uuden lisääminen tai lisätty teksti
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You added successfully!</h4>
            <button className="btn btn-success" onClick={this.newNote}>
              Continue
            </button>
          </div>
        ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={this.state.title}
                  //vaihetaan title
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Message</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={this.state.description}
                  //vaihetaa kuvaus
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>

              <button onClick={this.saveNote} className="btn btn-success">
                Add
            </button>
            </div>
          )}
      </div>

    );
  }


}
