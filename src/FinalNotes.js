import React from 'react';
import './App.css';

const FinalNotes = (props) => {
    let date =  new Date();
    return (           
        <div className = 'row' id = {`FinalNotes${props.index_prop}`}>
            <div className = 'column'id = {`label${props.index_prop}`} style = {{wordBreak: 'break-all'}}> 
                {props.note_prop}- Created at:<label>({date.toLocaleTimeString()})</label>
            </div>
            <div className = 'column'>
                <button value = {props.index_prop} onClick ={props.onFinalNoteChange_prop}>
                    Done
                </button>
            </div>
        </div>
    );
}

export default React.memo(FinalNotes);