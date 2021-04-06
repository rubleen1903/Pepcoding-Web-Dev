function convertToBinary(num) {
    let bin = 0;
    let rem, i = 1;
    while (num != 0) {
        rem = num % 2;
        num = parseInt(num / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log('Binary: ' + bin);
}
convertToBinary(13);