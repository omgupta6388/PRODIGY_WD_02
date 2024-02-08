let btn1 = document.querySelectorAll(".btn");
let resbtn = document.querySelector("#res");
let messcont = document.querySelector(".msg");
let newgame = document.querySelector("#str");
let mess = document.querySelector("#win");
let turnO = true;
const pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turnO = true;
  enablebtn();
  messcont.classList.add("hide");
};

btn1.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerText = "O";
      turnO = false;
    } else {
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;
    checkwinner();
  });
});

const disablebtn = () => {
  for (let b of btn1) {
    b.disabled = true;
  }
};

const enablebtn = () => {
  for (let b of btn1) {
    b.disabled = false;
    b.innerText = "";
  }
};

const showwinner = (winner) => {
  mess.innerText = `Congratulations!\nWinner is ${winner}`;
  messcont.classList.remove("hide");
  disablebtn();
};

const checkwinner = () => {
  for (let p of pattern) {
    let val1 = btn1[p[0]].innerText;
    let val2 = btn1[p[1]].innerText;
    let val3 = btn1[p[2]].innerText;

    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        showwinner(val1);
      }
    }
  }
};

newgame.addEventListener("click", resetgame);
resbtn.addEventListener("click", resetgame);
