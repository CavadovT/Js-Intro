//First Task
function Devide(num1, num2) {
  return num1 / num2;
}
document.getElementById("task1").innerHTML = Devide(28, 2);

console.log(Devide(28, 2));

//second task
function Repeat(word, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += word;
  }
  return result;
}
document.getElementById("task2").innerHTML = Repeat("Ha!", 5);
//
console.log("Daxil edilmis sözün təkrarı" + Repeat("Ha!", 5));

//third Task

function SumArray() {
  let arr = Array.from(arguments);

  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    result += element;
  }
  return result;
}
document.getElementById("task3").innerHTML =
  "Göndərilən n sayda ədələrin cəmi=" + SumArray(1, 2, 3, 4, 5, 6, 8);

console.log(
  "Göndərilən n sayda ədələrin cəmi=" + SumArray(1, 2, 3, 4, 5, 6, 8)
);

//fourth task

function CircleArea(r) {
  const p = 3;
  let result = p * r * r;
  return result;
}
console.log("Dairənin sahəsi=" + CircleArea(5));

function RectangleArea(a, b) {
  return a * b;
}
console.log("Düzbucaqlının sahəsi=" + RectangleArea(3, 5));

function TriangelCArea(a, b, c, r) {
  return ((a + b + c) / 2) * r;
}
console.log(
  "uçbucaq daxilinə çəkilmiş çevrənin sahəsi=" + TriangelCArea(3, 2, 1, 1)
);

function Max(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("Maximum Element  " + Max([18, 9, 82, 18, 45, 86]));

function Delete(arr, index) {
  arr.splice(index - 1, 1);
  return arr;
}
let arrk = [1, 6, 18, 15, 72, 2];
console.log(Delete(arrk, 4));
console.log(arrk);
