import React from 'react';

var PaletteColor = props => (
    <li className='palette-color'>
        <span
            className='palette-color-preview'
            style={{ backgroundColor: props.color }}
        />
        <div>
            {props.color}
            {/* on click event to remove from palette here */}
        </div>
    </li>
);

export default PaletteColor;