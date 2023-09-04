// the module to deal with the content of the tic tac toe board.
const theBoard = (() => {
  // the array holding the board content
  const boardContent = [];

  // the board is filled with ''.
  const createBoard = (dim) => {
    for (let i = 0; i < dim; i += 1) {
      boardContent[i] = [];
      for (let j = 0; j < dim; j += 1) {
        boardContent[i][j] = '';
      }
    }
  };

  // the method returning the board content
  const getBoardContent = () => boardContent;

  // the method to set a specific location of the board to the specified mark.
  const setBoardContent = (x, y, theMark) => {
    boardContent[x][y] = theMark;
  };

  // an object with the methods createBoard, getBoardContent and setBoardContent 
  // is returned.
  return { createBoard, getBoardContent, setBoardContent };
}
)();

// the module to get the dimension of the board from the player(s).
const gameController = (() => {
  let theDim; // the dimension of the board
  const boardArray = []; // the array to hold the board content.

  // draws the game board to the screen as soon as the requested dimension is 
  // obtained from the user.
  const drawTheBoard = () => {
    // the body element of the board page.
    const theBody = document.body;

    // the div to hold the board is created and appended to the body.
    const boardDiv = document.createElement('div');
    theBody.appendChild(boardDiv);
    boardDiv.className = "boardDiv";
    boardDiv.style.gridTemplateColumns = `repeat(${theDim}, 1fr)`;
    boardDiv.style.gridTemplateRows = `repeat(${theDim}, 1fr)`;
    for (let i = 0; i < theDim; i += 1) {
      boardArray[i] = [];
      for (let j = 0; j < theDim; j += 1) {
        const gridCell = document.createElement('div');
        gridCell.style.gridColumnStart = i + 1;
        gridCell.style.gridColumnEnd = i + 2;
        gridCell.style.gridRowStart = j + 1;
        gridCell.style.gridRowEnd = j + 2;
        gridCell.className = "gridCell";
        boardArray[i][j] = gridCell;
        boardDiv.appendChild(gridCell);
      }
    }
  }

  // builds the user interface to get the board dimension from the player(s).
  const getBoardDim = () => {
    // the body element of the board page.
    const theBody = document.body;

    // the div to hold the radio buttons is created and appended to the body.
    const selectionDiv = document.createElement('div');
    theBody.appendChild(selectionDiv);

    // the instruction text is created and written to the text paragraph.
    const pText = document.createElement('p');
    pText.textContent = 'Please choose the board dimension.';
    // the text paragraph is appended to the parent div.
    selectionDiv.appendChild(pText);

    // declarations for paragraph, radio button and label variables.
    let p1; let p2; let p3; let radioButton1; let radioButton2; let radioButton3;
    let label1; let label2; let label3;
    // the label array is declared and initiated.
    const pArray = [p1, p2, p3];
    // the array of radio buttons is declared and defined.
    const radioButtonArray = [radioButton1, radioButton2, radioButton3];
    // the label array is declared and initiated.
    const labelArray = [label1, label2, label3];
    // the array of board dimensions is declared and initiated.
    const dimArray = ['3x3', '5x5', '7x7'];
    // the radio buttons with their labels are created and appende to their 
    // respective paragraphs. The paragraphs are finally appended to the selection 
    // div.
    for (let i = 0; i < 3; i += 1) {
      // the paragraph to hold the radio button and its label is created.
      pArray[i] = document.createElement('p');
      // the paragraph is a flex container.
      pArray[i].style.display = 'flex';
      // the radio button and its label is centered.
      pArray[i].style.justifyContent = 'center';
      pArray[i].style.alignItems = 'center';
      // the input element is created.
      radioButtonArray[i] = document.createElement('input');
      // the label of the input element is created.
      labelArray[i] = document.createElement('label');
      // the input element is a radio button.
      radioButtonArray[i].type = 'radio';
      // the id of the radio button is set.
      radioButtonArray[i].id = dimArray[i];
      // the value represented by the radio button is set.
      radioButtonArray[i].value = dimArray[i];
      // the name of the radio button is set.
      radioButtonArray[i].name = 'dimension';
      // it is set which radio button the label belongs to.
      labelArray[i].htmlFor = dimArray[i];
      // the text of the label is set.
      labelArray[i].textContent = dimArray[i];
      // the label is appended to its paragraph.
      pArray[i].appendChild(labelArray[i]);
      // the radio button is appended to its paragraph.
      pArray[i].appendChild(radioButtonArray[i]);
      // the paragraph holding the label and the radio button is appended to the 
      // selection div.
      selectionDiv.appendChild(pArray[i]);
    }

    // the first radio button is checked by default.
    radioButtonArray[0].checked = true;

    // the paragraph to hold the choose button is created.
    const pChoose = document.createElement('p');
    // the paragraph is a flex container.
    pChoose.style.display = 'flex';
    // the choose button is at the rightmost of the paragraph.
    pChoose.style.flexDirection = 'row-reverse';
    // the input to be set as the choose button is created.
    const closeButton = document.createElement('input');
    // the input is a submit button.
    closeButton.type = 'submit';
    // the text of the button is 'CHOOSE'.
    closeButton.value = 'CHOOSE';
    // the choose button is appended to its paragraph.
    pChoose.appendChild(closeButton);
    // the choose button is appended to the selection div.
    selectionDiv.appendChild(pChoose);

    // the function to be invoked when the choose button is clicked.
    const setDim = () => {
      // get the radio button which is selected by the player(s).
      const selRadio = document.querySelector('input[name="dimension"]:checked');
      // get the selected dimension as a number
      theDim = +selRadio.value[0];
      // create the board array and initialize its content according to the 
      // selected dimension.
      theBoard.createBoard(theDim);
      theBoard.setBoardContent(0, 0, 'x');
      theBoard.setBoardContent(1, 1, 'o');
      console.log(theBoard.getBoardContent());
      console.log(theDim);
      // remove the selection user interface after the selection is made.
      selectionDiv.remove();

      // draw the board to the screen
      drawTheBoard(theDim);
    }
    // the click on the choose button is listened to.
    pChoose.addEventListener("click", setDim);
  };

  // an object with the method getBoardDim and the property theDim is returned.
  return { getBoardDim, theDim };
}
)();

// the dimension of the board is obtained from the player(s), the board array is 
// created and its content is initialized.
gameController.getBoardDim();