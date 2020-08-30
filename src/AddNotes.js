import React, {PureComponent} from 'react';
import FinalNotes from './FinalNotes';
import './App.css';

class AddNotes extends PureComponent {
    state = {
        txtarea: '',
        array: []
    }

    handleChange = (event) => {
        this.setState({txtarea: event.target.value});
        // this.setState((prevState, props) => ({
        //     id: prevState.id + 1
        // }));
    }

    handleAddButton = (event) => {
        const txt = this.state.txtarea;
        if (txt !== '' ){
            this.setState({array: [...this.state.array, txt]})
            this.setState({txtarea: ''});
        }
        else {
            alert('Please provide a valid input');
        }
        event.preventDefault();
    }

    onEnterPress = (event) => {
        if((event.keyCode === 13 || event.which === 13) && !event.shiftKey) {
            this.handleAddButton(event);
        }
    }

    render () {
        return (
            <React.Fragment>
                {this.state.array.length !== 0 && this.state.array.map( (data2, id) => 
                    <div key = {id}>
                        <FinalNotes note_prop = {data2} 
                                    index_prop = {id} 
                                    onFinalNoteChange_prop = {this.props.onFinalNoteChange1} />
                    </div>
                 )}
                <form onSubmit = {this.handleAddButton}>
                    <div className = 'row'>
                        <div className = 'column'>
                            <textarea 
                                rows='3' 
                                cols='50' 
                                placeholder='Write your notes here within 50 words' 
                                value = {this.state.txtarea}
                                maxLength='50'
                                style = {{resize: 'none'}} 
                                onChange = {this.handleChange}
                                onKeyPress = {this.onEnterPress} />
                        </div>
                        <div className = 'column'>
                            <button 
                                type = 'submit' 
                                style = {{marginLeft: '100px', marginTop: '15px'}}>
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default AddNotes;