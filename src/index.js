import "./styles.css";

//Declare variables
let inp = document.getElementById("inp");
let result = document.getElementById("result");
let btn = document.getElementById("btn");
let counter = 0;

//Actual function implemented by event listener
let func = () => {
  result.innerHTML = `Hello ${counter++}`;
};

//throttling function
let betterFunc = (funcParam, delay) => {
  let last = 0;
  return function () {
    const now = new Date().getTime();
    let context = this;
    let args = arguments;

    if (now - last < delay) {
      return;
    }
    last = now;
    return funcParam.apply(context, args);
  };
};

//Listen for event in the text input field
inp.addEventListener("keyup", betterFunc(func, 2000));

//Listen for button click, this clears result field
btn.addEventListener("click", () => {
  result.innerHTML = "";
});
