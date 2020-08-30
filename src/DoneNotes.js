import React from 'react';

const DoneNotes = (props) => {
    return (
        <div>
            <p>Done: {props.text_prop}</p>
        </div>
    );
}

export default React.memo(DoneNotes);