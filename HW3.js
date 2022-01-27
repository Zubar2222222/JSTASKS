let i = 0;
while ('i<3') { // extract 0,then 1,then 2
  console.log(i);
  i++;
};

let i = 2;
do {
  alert(i);
  i++;
} while (i<6);

for (let i = 0; i < 3; i++) { // extract 0,then 1,then 2
  console.log(i);
};

let a = 2 + 2;
switch(a) {
  case 3:
    alert('Little Bit Less');
  case 4:
    alert('You Are Right!');
  case 5:
    alert('Too Much');
  default:
    alert('Those Numbers Doesnt Exist');
};

function showMessage() {
  alert('Good Morning!');
};
showMessage();
showMessage();

let userName = 'Antony';
function showMessage() {
let message = 'Hello,' + userName;
  alert(message);
};
showMessage();// Hello,Antony

let sayHi = function() {
  alert('Hello');
};

let age = prompt('How Old Are You?', 22);
let welcome;
if (age < 22) {
  welcome = function() {
    alert('Hello');
  };
} else {
  welcome = function() {
    alert('Good Afternoon');
  };
};
welcome();
