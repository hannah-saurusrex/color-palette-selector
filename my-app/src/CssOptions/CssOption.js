import React from 'react';

// on click, grab the selected color and add it to the background style.

var CssOption = props => (
    <li className="color-option" onClick={() => props.selectColor(props.color)}> 
        <span
            className="color-option-preview"
            style={{ backgroundColor: props.color }}
        />
        {props.color}
    </li>
);

export default CssOption