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

const gameController = (() => {
  let theDim;
  const getBoardDim = () => {
    const theBody = document.body;

    const selectionDiv = document.createElement('div');
    theBody.appendChild(selectionDiv);
    theBody.style.display = 'flex';
    theBody.style.justifyContent = 'center';

    const pText = document.createElement('p');
    pText.textContent = 'Please choose the board dimension.';
    selectionDiv.appendChild(pText);

    let p1; let p2; let p3; let radioButton1; let radioButton2; let radioButton3;
    let label1; let label2; let label3;
    const pArray = [p1, p2, p3];
    const radioButtonArray = [radioButton1, radioButton2, radioButton3];
    const labelArray = [label1, label2, label3];
    const dimArray = ['3x3', '5x5', '7x7'];
    for (let i = 0; i < 3; i += 1) {
      pArray[i] = document.createElement('p');
      pArray[i].style.display = 'flex';
      pArray[i].style.justifyContent = 'center';
      radioButtonArray[i] = document.createElement('input');
      labelArray[i] = document.createElement('label');
      radioButtonArray[i].type = 'radio';
      radioButtonArray[i].id = dimArray[i];
      radioButtonArray[i].value = dimArray[i];
      radioButtonArray[i].name = 'dimension';
      labelArray[i].htmlFor = dimArray[i];
      labelArray[i].textContent = dimArray[i];
      pArray[i].appendChild(labelArray[i]);
      pArray[i].appendChild(radioButtonArray[i]);
      selectionDiv.appendChild(pArray[i]);
    }
  };

  return { getBoardDim, theDim };
}
)();

gameController.getBoardDim();