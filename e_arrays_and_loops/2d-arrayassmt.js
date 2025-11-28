//-------------------------Arrays and Loops--------------------------------//


// example of a 2D array

const array2D = [
    [3, 2, 7],// row 1
    [2, 9, 5],// row 2
    [5, 1, 5],// row 2

];

const another2Darr = new Array(
    [3, 2, 7],
    [2, 9, 5],
    [5, 1, 5],
)

console.log(array2D);


//2D Array examples:
const array2DX =[
    [3, 2, 7],  // row 1
    [2, 9, 5],  // row 2
    [5, 1, 5],  // row 3
];
const another2DarrX = new Array(
    [3, 2, 7],// row 1
    [2, 9, 5],// row 2
    [5, 1, 5],// row 3
);

const e1 = array2D[0][0];
const e2 = array2D[1][0];
const e3 = array2D[0][2];

console.log(e1, e2, e3);

const e4 = array2D[1][0];
const e5 = array2D[1][1];
const e6 = array2D[1][2];

console.log(e4, e5, e6);


const myField = [
  ['░', '░', 'O', '░'],
  ['*', 'O', '░', 'O'],
  ['░', '^', '░', '░'],
];

console.log(myField);

const rows = 3;
const cols = 3;

for (let index = 0; index < array2D.length; index++){
    const element = array[index];

    for (let index = 0; index < array.length; index++){
        const element = array[index];
    }
}


const rowsX = 3;
const colsX = 3;
const arr2D = [];

for(let i = 0; i < rowsX; i++){
    arr2D[i] = [];

    for(let j = 0; j < colsX; j++){
        arr2D[i][j] = 0;
    }
}

