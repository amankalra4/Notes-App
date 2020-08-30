import React, {Component} from 'react';
import AddNotes from './AddNotes'
import DoneNotes from './DoneNotes';
import './App.css';

class Notes extends Component {

    constructor(props) {
      super(props);
      this.state = {
        array: [],
        toggle: false,
        arr: []
      }
    }
  
    handleChange1 = (event) => {
        let event_id = event.target.value;
        let visible = document.getElementById(`label${event_id}`);
        this.setState({arr: [...this.state.arr, visible.textContent]})
        this.setState({toggle: true});
        document.getElementById(`FinalNotes${event_id}`).remove();
    }
  
    render () {
      return (
        <React.Fragment>
          <h2 style = {{textAlign: 'center'}}>Your Notes App</h2>
          <div className = 'row'>
            <div className = 'column' style = {{border: '1px solid green'}}>
              <h4>Add your items here</h4>
              <AddNotes onFinalNoteChange1 = {this.handleChange1} array_prop = {this.state.array} />
            </div>
            <div className = 'column' style = {{border: '1px solid red'}}>
              <h4>Your completed items will appear here</h4>
              {this.state.toggle && this.state.arr.map( (data,id) => 
                <React.Fragment key = {id}>
                  <DoneNotes text_prop = {data} />
                </React.Fragment>
              )}
            </div>
          </div>
        </React.Fragment>
      );
    }
}

export default Notes;