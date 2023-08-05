// create the tic tac toe board using the module pattern.
const theBoard = (() => {
  const boardContent = [];

  const createBoard = (dim) => {
    for (let i = 0; i < dim; i += 1) {
      boardContent[i] = [];
      for (let j = 0; j < dim; j += 1) {
        boardContent[i][j] = '';
      }
    }
  };

  const getBoardContent = () => boardContent;

  const setBoardContent = (x, y, theMark) => {
    boardContent[x][y] = theMark;
  };

  return { createBoard, getBoardContent, setBoardContent };
}
)();

