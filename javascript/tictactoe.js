// create the tic tac toe board using the module pattern.
const theBoard = (() => {
  const boardContent = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  const getBoardContent = () => boardContent;

  const setBoardContent = (x, y, theMark) => {
    boardContent[x][y] = theMark;
  };

  return { getBoardContent, setBoardContent };
}
)();
