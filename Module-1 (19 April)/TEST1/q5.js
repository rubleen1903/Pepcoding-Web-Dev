let arr = [1, 2, 3];
(function () {
  for (x in arr) arr.unshift(arr.pop());
  console.log(arr);
})();

let randomAdder = function (arr = ["a", "b"]) {
  arr[arr.length * arr.length] = arr.length * arr.length;
};

randomAdder(arr);
randomAdder();

console.log(arr[9]);
console.log(arr[8]);

//Answer is OPTION D