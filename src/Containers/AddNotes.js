import React, {PureComponent} from 'react';
import FinalNotes from '../Components/FinalNotes';
import styles from './AddNotes.module.css'

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
                <div style = {{position: 'relative'}}>
                    {this.state.array.length !== 0 && this.state.array.map( (data2, id) => 
                        <React.Fragment key = {id}>
                            <FinalNotes note_prop = {data2} 
                                    index_prop = {id} 
                                    onFinalNoteChange_prop = {this.props.onFinalNoteChange1} />
                        </React.Fragment>
                    )}
                </div>
                <form onSubmit = {this.handleAddButton}>
                    <textarea 
                        rows='3' 
                        cols='50' 
                        placeholder = 'Write your notes here within 50 words' 
                        value = {this.state.txtarea}
                        maxLength = '50'
                        className = {styles.txtArea}
                        onChange = {this.handleChange}
                        onKeyPress = {this.onEnterPress} />
                    <button type = 'submit' className = {styles.addButton}>Add</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddNotes;