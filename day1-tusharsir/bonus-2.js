//to find the first and last occurence of number 1 in an array
let first = 100;
let last = 0;
let b = [1, 3, 4, 5, 1, 8, 9, 1];
let i = 0;

function arr1(a) {
    for (i = 0; i < a.length; i++) {
        if (a[0] == 1)
            first = 0;
        else {
            for (i = 1; i < a.length; i++) {
                if (a[i] == 1 && i < first) {
                    first = i;
                }
            }
        }
        if (a[a.length[i]] == 1) {
            last = array.length;
        } else {
            for (i = 1; i < a.length; i++) {
                if (a[i] == 1 && i > last) {
                    last = i;
                }
            }
        }


    }
    console.log("First " + first + " Last " + last);
}
arr1(b);