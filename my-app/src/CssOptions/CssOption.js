import React from 'react';

var CssOption = props => (
    <li className="color-option" onClick={()}> 
    {/* write on click event */}
        <span
            className="color-option-preview"
            style={{ backgroundColor: props.color }}
        />
        {props.color}
    </li>
);

export default CssOption