import React from 'react';

const DoneNotes = (props) => {

    let x = props.text_prop;
    let y = x.split('-');
    // console.log(x);
    // console.log(y);
    let z = y[1].split('at:');
    // console.log(z)

    return (
        <div>
            <p>
                Done Item: <strong style = {{textTransform: 'capitalize'}}>{y[0].trim()}; </strong>
                was added at: <strong style = {{textTransform: 'capitalize'}}>{z[1].trim()}</strong>
            </p>
        </div>
    );
}

export default React.memo(DoneNotes);