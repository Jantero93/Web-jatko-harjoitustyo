import React, { Component } from "react";
import NoteDataService from "../services/note.service";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Note from "./note.component";

export default class NotesList extends Component {
  constructor(props) {
    console.log('notelist props: ', props)
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveNote = this.setActiveNote.bind(this);
    this.removeAllNotes = this.removeAllNotes.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      /* tulostetaan note lista ilman valittua notea */
      notes: [],
      currentNote: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    NoteDataService.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount() {
    NoteDataService.getAll().off("value", this.onDataChange);
  }

  //data vaihtuu notessa niin lista uusiksi
  onDataChange(items) {
    let notes = [];
    //  console.log('items: ',items)

    items.forEach((item) => {
      //  console.log('item: ', item)
      let key = item.key;
      let data = item.val();
      notes.push({
        key: key,
        title: data.title,
        description: data.description,
        // published: data.published,
      });
    });

    this.setState({
      notes: notes,
    });
  }

  //lista päivittyy, ei valittua notea
  refreshList() {
    this.setState({
      currentNote: null,
      currentIndex: -1,
    });
  }

  setActiveNote(note, index) {
    this.setState({
      currentNote: note,
      currentIndex: index,
    });
  }

  removeAllNotes() {
    NoteDataService.deleteAll()
      .then(() => {
        this.refreshList();
      })
      /*
      .catch((e) => {
        console.log(e);
      }); */
  }

  render() {
    const { notes, currentNote, currentIndex } = this.state;

    return (
      <div className="website">

      <Row md={4}
       style={{marginLeft: "1rem"}}
      >
        
        <Col fluid="false">

          <h4>Message List</h4>

          {/* note list */}
          <ul className="list-group">
            {/*notes && tarviiko?*/
            //notet listataan 
              notes.map((note, index) => (
                <li
                  /* highlight aktiivinen note listasta */
                  className={
                    //highlightataan aktiivinen indeksi 
                    "list-group-item " +
                    //?
                    (index === currentIndex ? "active" : "")
                  }
                  //asetetaan aktiivinen note
                  onClick={() => this.setActiveNote(note, index)}
                  key={index}
                >
                  {/* näytä noten otsikko */}
                  {note.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-info"
            onClick={this.removeAllNotes}
          >
            Remove All
          </button>


        </Col>

        <Col>
          {/* näytetään aktiivinen note tai teksti */}
          {currentNote ? (
            <Note
              note={currentNote}
              refreshList={this.refreshList}
            />
          ) : (
              <div>
                <br />
                <p>Click a Message</p>
              </div>
            )}

        </Col>
        
      </Row>  

      </div>
    );
  }
}



{/*


 
      <div className="list row">
        <div className="col-md-6">
          <h4>Notes List</h4>
       
        { note list }
        <ul className="list-group">
        {/*notes && tarviiko?
          notes.map((note, index) => (
            <li
              className={
                silmäkarkkia bootstrapilla
                "list-group-item " +
                ?
                (index === currentIndex ? "active" : "")
              }
              //asetetaan aktiivinen note
              onClick={() => this.setActiveNote(note, index)}
              key={index}
            >
              {note.title}
            </li>
          ))}
      </ul>

      <button
        className="m-3 btn btn-sm btn-info"
        onClick={this.removeAllNotes}
      >
        Remove All
      </button>
    </div>

              
    <div className="col-md-6">
      {/* näytetään aktiivinen note tai teksti }
      {currentNote ? (
        <Note
          note={currentNote}
          refreshList={this.refreshList}
        />
      ) : (
        <div>
          <br />
          <p>Click a Note</p>
        </div>
      )}
    </div>
  </div>


  



      */}