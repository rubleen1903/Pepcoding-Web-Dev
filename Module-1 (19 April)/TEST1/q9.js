let data= "not picking"

spoon(data);
function spoon(text){

    let splitWords = text.split(" ");
    let n1 = splitWords[0].length;
    let n2= splitWords[1].length;
    let char1 =   splitWords[0][0];
    let char2 =   splitWords[1][0];
    console.log(char2 +splitWords[0].substring(1, n1) +" " + char1 + splitWords[1].substring(1,n2));

}