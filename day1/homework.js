//to convert string input to integer

console.log(process.argv);

function add(num) {
    let a = parseInt(num);
    console.log(a + 2);
}
add(process.argv[2]);