import React from 'react';
import styles from './FinalNotes.module.css';

const FinalNotes = (props) => {
    let date =  new Date();
    return (           
        <div className = {styles.row} id = {`FinalNotes${props.index_prop}`}>
            <div className = {styles.column} id = {`label${props.index_prop}`}> 
                {props.note_prop} - <strong>Added at: </strong>
                <label>{date.toLocaleTimeString()}</label>
            </div>

            <div className = {styles.column} style = {{display: 'inline-block'}}>
                <button 
                    className = {styles.button}
                    value = {props.index_prop}
                    onClick ={props.onFinalNoteChange_prop}>
                    Done
                </button>
            </div>
        </div>
    );
}

export default React.memo(FinalNotes);