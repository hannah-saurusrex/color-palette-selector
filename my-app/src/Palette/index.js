import React from 'react';
import PaletteColor from './PaletteColor';

var Palette = props => {
    // var palette = props.palette.map(color => (
    //     <PaletteColor />
    // ));
    return (
        <div>
            <h2>Color Palette</h2>
            <ul className="palette-colors">{palette}</ul>
            <hr />
        </div>
    );
};

export default Palette;