// // Adds Extra Width to the finished Parts Width 
// function addExtraRipWidth (part, width=0.1875){
//     return part.witdth + width
// } 

// // Returns the Minimum Length of stock to use in Inches
// function determineStockLength(part){
//     const materialLengths = [84, 96, 108, 120, 132, 144, 156, 168]
//     const smallestMaterial = materialLengths.filter(length => part.length < length)
//     return smallestMaterial[0]
// }

// class Door {
//     constructor(height, width){

//     }
// }

//document elements
const fmDoorWidth = document.querySelector('#fm-door-width')
const fmDoorHeight = document.querySelector('#fm-door-height')
const fmDoorThickness = document.querySelector('#fm-door-thickness')
const fmLeftStileWidth = document.querySelector('#fm-left-stile-width')
const fmRightStileWidth = document.querySelector('#fm-risght-stile-width')
const fmMoldingWidth = document.querySelector('#fm-door-height')

const doorArr = []

