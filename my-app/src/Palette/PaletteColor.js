import React from 'react';

var PaletteColor = props => (
    <li className="palette-color">
        <span
            className="palette-color-preview"
            style={{ backgroundColor: props.color }}
        />
        <div>
            {props.color}
            <span
                // onClick write click event
                className="remove-from-palette"
            >
            X
            </span>
        </div>
    </li>
);

export default PaletteColor;