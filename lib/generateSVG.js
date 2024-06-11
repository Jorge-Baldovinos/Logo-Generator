function renderShape(shape){
    let selection = shape;
    switch (selection) {
        case 'Triangle':
            return 'polygon points="50 15, 100 100, 0 100"'
            break
        case 'Circle':
            return 'circle cx="25" cy="75" r="20"'
            break
        case 'Square':
            return 'rect x="50" y="50" width="100%" height="100"'
            break
    }; 
};

function renderShapeColor(shapeColor){
    let selection = shapeColor;
    switch (selection) {
        case 'Red':
            return 'fill="red"'
            break
        case 'Yellow':
            return 'fill="yellow"'
            break
        case 'Blue':
            return 'fill="blue"'
            break
    };
};

function renderTextColor(textColor){
    let selection = textColor;
    switch (selection) {
        case 'White':
            return 'white'
            break
        case 'Black':
            return 'black'
            break
    };
};
   
function generateSVG(data){
    return ` 
    <svg viewBox="0 0 100 100">
    <${renderShape(data.shape)} ${renderShapeColor(data.shapeColor)}/>
    <text x="60" y="75" font-family="Verdana" font-size="5" fill="${renderTextColor(data.textColor)}">${data.text}</text>
        </svg>
    `
}

module.exports = generateSVG