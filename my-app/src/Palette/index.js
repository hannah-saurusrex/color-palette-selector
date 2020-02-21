import React from 'react';
import PaletteColor from './PaletteColor.js';

var Palette = props => {
    var palette = props.palette.map(color => (
        <PaletteColor 
            // add key, color, remove from palette prop    
        />
    ));
    return (
        <div>
            <h2>Color Palette</h2>
            <ul className='palette-colors'>{palette}</ul>
            <hr />
        </div>
    );
};

export default Palette;