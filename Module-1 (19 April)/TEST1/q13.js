let a;
console.log(a);

function A() {
  let a = 2;
  console.log(a);

  function C() {
    console.log(a);

    function D() {
      console.log(a);

      a = 2;
    }
    D();
    a = 3;
  }
  C();
}

function B() {
  let a;
  console.log(a);
  
  function E() {
    a = 6;
    console.log(a);
    
  }
  
  a = 2;
  E();
  console.log(a);
}

function F() {
  console.log(a);
  a = 2;
}

a = 3;

F();
B();
A();
//Answer is OPTION B