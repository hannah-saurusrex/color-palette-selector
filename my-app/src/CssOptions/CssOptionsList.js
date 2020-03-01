import React from 'react';
import CSS_COLOR_NAMES from './cssColorNames';
import CssOption from './CssOption';

// make a list of all of the available color options; assign each option a key/color/select color.

var CssOptionsList = props => {
    var colorOptions = CSS_COLOR_NAMES.map(color => (
        <CssOption 
            key={color} 
            color={color} 
            selectColor={props.selectColor} />
    ));
    return <ul className="color-options">{colorOptions}</ul>
};

export default CssOptionsList;