const clicked = (evt) => {
  //   console.log(evt.target);
  const sqs = document.getElementsByClassName("squre");
  for (let i = 0; i < sqs.length; i++) {
    //   console.log(uniqueArray.includes(sqs[i].myParam));

    sqs[i].classList.remove("red");
  }
  const num = evt.currentTarget.cellvalue;
  let i = evt.currentTarget.i;

  let j = evt.currentTarget.j;

  //   console.log(
  //     evt.currentTarget.cellvalue,
  //     evt.currentTarget.i,
  //     evt.currentTarget.j
  //   );

  let left = [];

  let right = [];

  left.push(num);
  while (true) {
    if (i == 0 || j == 0) break;
    i--;
    j--;
    left.push(i * 8 + j);
  }
  i = evt.currentTarget.i;

  j = evt.currentTarget.j;
  while (true) {
    if (i == 7 || j == 7) break;
    i++;
    j++;
    left.push(i * 8 + j);
  }
  i = evt.currentTarget.i;

  j = evt.currentTarget.j;
  while (true) {
    if (i == 0 || j == 7) break;
    i--;
    j++;
    right.push(i * 8 + j);
  }
  i = evt.currentTarget.i;

  j = evt.currentTarget.j;
  while (true) {
    if (i == 7 || j == 0) break;
    i++;
    j--;
    right.push(i * 8 + j);
  }
  //   console.log(Aleftdig, Arigdig);

  let finalarray = left.concat(right);

  //   uniqueArray = finalarray.filter(function (item, pos) {
  //     return finalarray.indexOf(item) == pos && item >= 0 && item <= 63;
  //   });
  //   console.log(uniqueArray);

  for (let i = 0; i < sqs.length; i++) {
    if (finalarray.includes(sqs[i].cellvalue)) {
      sqs[i].classList.add("red");
    }
  }
};

// console.log(board);
const chessboardCreation = () => {
  for (let i = 0; i < 8; i++) {
    let row = document.createElement("div");
    row.className = "for-row";
    for (let j = 0; j < 8; j++) {
      let squre = document.createElement("div");
      squre.className = "squre";
      if ((i + j) % 2 == 0) {
        squre.className = "squre-white squre";
      } else {
        squre.className = "squre-black squre";
      }
      //   squre.innerHTML = i * 8 + j;
      squre.innerHTML = `(${i},${j})`;
      squre.addEventListener("click", clicked);
      squre.cellvalue = i * 8 + j;
      squre.i = i;
      squre.j = j;
      row.appendChild(squre);
    }
    // console.log(row);
    board.appendChild(row);
  }
};
var board = document.getElementById("chessboard");
chessboardCreation();
document.getElementById("outer").addEventListener("click", function (e) {
  //   console.log(e.target.id);
  if (e.target.id == "outer") {
    // console.log("clicked outside");
    const sqs = document.getElementsByClassName("squre");
    for (let i = 0; i < sqs.length; i++) {
      sqs[i].classList.remove("red");
    }
  }
});
