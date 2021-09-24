let a=document.getElementById(`fnumb`);
   let b=document.getElementById(`lnumb`);
   

   function sum(){
     let c=(+a.value + +b.value);
     let result=document.getElementById("result").innerText= c;
   }

   document.getElementById("go").onclick = function() {
    sum();
  }

   function min(){
     let d=(+a.value - +b.value);
     let res=document.getElementById("result").innerText=d;
   }

   document.getElementById("go1").onclick = function() {
    min();
  }

   function multy(){
     let e=(+a.value * +b.value);
     let mlt=document.getElementById(`result`).innerText=e;
   }

   document.getElementById(`go2`).onclick=function() {
    multy();
  }

   function division(){
    let f=(+a.value / +b.value);
    let dvs=document.getElementById(`result`).innerText=f;
     
   }
   document.getElementById(`go3`).onclick=function() {
    division();
  }

 