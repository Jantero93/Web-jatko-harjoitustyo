import React, { Component } from "react";
import NoteDataService from "../services/note.service";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.state = {
      currentNote: {
        key: null,
        title: "",
        description: ""     
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { note } = nextProps;
    if (prevState.currentNote.key !== note.key) {
      return {
        currentNote: note,
        message: ""
      };
    }

    return prevState.currentNote;
  }

  componentDidMount() {
    this.setState({
      currentNote: this.props.note,
    });
  }

  onChangeTitle(newTitle) {
    const title = newTitle.target.value;

    this.setState(function (prevState) {
      return {
        currentNote: {
          ...prevState.currentNote,
          title: title,
        },
      };
    });
  }

  onChangeDescription(newDescription) {
    const description = newDescription.target.value;

    this.setState((prevState) => ({
      currentNote: {
        ...prevState.currentNote,
        description: description,
      },
    }));
  }

  updateNote() {
    const data = {
      title: this.state.currentNote.title,
      description: this.state.currentNote.description,
    };

    //päivitään databaseen
    NoteDataService.update(this.state.currentNote.key, data)
      .then(() => {
        this.setState({        
        });
      })  
  }

  //päivitetään databaseen 
  deleteNote() {
    NoteDataService.delete(this.state.currentNote.key)
      .then(() => {
        this.props.refreshList();
       
      })
  }

  render() {
    const { currentNote } = this.state;

    return (
      <div className="website">
        <h4>Message</h4>
        {/* Note listan vieressä valittu note tai teksti*/}
        {currentNote ? (
          /* muokattava note */
          <div className="edit-form">
            <form>

              <div className="form-group">
                  {/* Otsikon tekstiloota */}
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentNote.title}
                  //jos vaihtuu niin suoritetaan
                  onChange={this.onChangeTitle}
                />

              </div>
              

              <div className="form-group">
                
                {/* kuvauksen tekstiloota */}
                <label htmlFor="description">Message</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentNote.description}
                  //jos vaihtuu niin suoritetaan
                  onChange={this.onChangeDescription}
                />
              </div>


            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteNote}
            >
              Delete
            </button>
            
            <button              
              className="badge badge-success"
              onClick={this.updateNote}
            >
              Update
            </button>
            
          </div>
        ) : (
          <div>
            <br />
            <p>Click a Message</p>
          </div>
        )}
      </div>
    );
   }
}
