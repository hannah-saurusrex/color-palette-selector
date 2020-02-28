import React from 'react';
import Heart from './Heart';

/* To Do - get selected color, return class name
style and on click */

var SelectedCssOption = props => {
    var selectedClassName = "selected-color";
    if (props.palette.includes(props.selectedColor)) {
        selectedClassName += " already-in-palette";
    }

    return (
        <div
            className={selectedClassName}
            style={{ background: props.selectedColor }}
            onClick={() => props.addToPalette(props.selectedColor)}
        >
            <Heart />
        </div>
    );
};

export default SelectedCssOption;