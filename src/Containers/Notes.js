import React, {Component} from 'react';
import AddNotes from './AddNotes'
import DoneNotes from '../Components/DoneNotes';

class Notes extends Component {

    constructor(props) {
      super(props);
      this.state = {
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
          <h2 style = {{textAlign: 'center'}}>Your Own Notes App</h2>

            <div style = {{border: '2px solid #627dab'}}>
              <h3 style = {{textAlign: 'center'}}>Add your items here</h3>
              <div>
                <AddNotes onFinalNoteChange1 = {this.handleChange1} />
              </div>
            </div>

            <div style = {{border: '2px solid #4c2929', margin: '10px 0px'}}>
              <h3 style = {{textAlign: 'center'}}>Your completed items will appear here</h3>
              <div style = {{margin: '0 10px'}}>
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
