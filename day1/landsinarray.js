var numbers = [2, 4, 9, 2, 0, 16, 24];

function large(a) {
    let largest = -1;
    let smallest = 100;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > largest) {
            largest = a[i];
        }
        if (a[i] < smallest) {

            smallest = a[i];
        }
    }
    console.log("Smallest " + smallest + " largest " + largest);
}
large(numbers);