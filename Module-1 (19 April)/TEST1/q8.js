let n=86;

decToBin(n);

function decToBin(num){

    let pow=1;
    let sum=0;
 while(num>0){
 let temp = Math.floor(num % 2);

 num =Math.floor( num/2);

 sum=sum+temp*pow;

 pow=pow*10;
 

 }
console.log(sum);
}