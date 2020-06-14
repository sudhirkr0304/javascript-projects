function reset() {
  document.getElementById('count').innerHTML = '0';
  changecolor();
}

function decrease() {
  let num = document.getElementById('count').innerHTML;
  let num2 = parseInt(num) - 1;
  document.getElementById('count').innerHTML = num2;
  changecolor();
}

function increase() {
  let num = document.getElementById('count').innerHTML;
  let num2 = parseInt(num) + 1;
  document.getElementById('count').innerHTML = num2;
  changecolor();
}

function changecolor() {
  let num = parseInt(document.getElementById('count').innerHTML);
  console.log(num);

  if (num > 0) {
    document.getElementById('count').style.color = 'green';
  }
  if (num === 0) {
    document.getElementById('count').style.color = 'black';
  }
  if (num < 0) {
    document.getElementById('count').style.color = 'red';
  }
}
