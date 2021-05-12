let a = 2;
{
  let a = 3;
  {
    let a = 4;
    {
      let a = 5;
      console.log(a);
    }
    console.log(a);
  }
  console.log(a);
}
console.log(a);


// Answer is OPTION A