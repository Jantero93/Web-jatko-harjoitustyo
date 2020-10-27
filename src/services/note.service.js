import firebase from "../firebase";

const db = firebase.ref("/notes");

class NoteDataService {
  getAll() {
    return db;
  }

  create(note) {
    return db.push(note);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new NoteDataService();
