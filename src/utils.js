import { rgba } from 'polished';

const colors = {};
const getColorById = (id) => {
    if (colors[id]) return colors[id];
    
    colors[id] = rgba(9999*id%255,6666*id%255,3333*id%255, 1);
    return colors[id];
}

export { getColorById };