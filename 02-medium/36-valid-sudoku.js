const isValidSudoku = (board) => {
    let status = true;
    if(board.length != 9) return false;
    if(board.some(el => el.length != 9)) return false;

    if(!elementRepeat(board)) return false;

    let columns = [];
    

    for(let z=0; z < 9;z++){
        let columns2 = [];
        board.forEach(element => {
            columns2.push(element[z]);
        });
        columns.push(columns2);
    }

    if(!elementRepeat(columns)) return false;


    let sudokus = [];
    

    for(let x=0; x < 3; x++){
        for(let y=0; y < 3; y++){
            sudokus.push(sudokuExtract(x*3, y*3));
        }
    }

    sudokus.forEach(sud => {
        let temp = sud.filter( (el, i) => sud.indexOf(el) !== i)
        temp= temp.filter(el => el != '.');

        if(temp.length){
            status = false;
        }
    });

    
    return status;
};

const elementRepeat = (board) => {
    let status = true;
    board.forEach(arr => {
        // El primer filtro deja los repetidos, el segundo quita todos los puntos.
        if(arr.filter( (el, i) => arr.indexOf(el) !== i).filter(el => el != '.').length){
            status = false;
        }
       
    });
    return status;
} 

const sudokuExtract = (x,y) => {
    let sudoku = [];
    for(let i=y; i < y+3;i++){
        for (let j = x; j < x+3; j++) {
            sudoku.push(board[i][j]);
        }
    }

    return sudoku;
}


// const board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]];

const board =
[[".",".","4",".",".",".","6","3","."]
,[".",".",".",".",".",".",".",".","."]
,["5",".",".",".",".",".",".","9","."]
,[".",".",".","5","6",".",".",".","."]
,["4",".","3",".",".",".",".",".","1"]
,[".",".",".","7",".",".",".",".","."]
,[".",".",".","5",".",".",".",".","."]
,[".",".",".",".",".",".",".",".","."]
,[".",".",".",".",".",".",".",".","."]];

console.log(isValidSudoku(board));