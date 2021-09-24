let a=document.getElementById(`fnumb`).value;
   let b=document.getElementById(`lnumb`).value;
   

   function sum(){
     let c=(+a + +b);
     let result=document.getElementById("result").innerText= c;
   }

   document.getElementById("go").onclick = function() {
    sum();
  }

   function min(){
     alert(+a - +b);
   }

   function multy(){
     alert(+a * +b)
   }

   function division(){
     alert(+a / +b)
     
   }

 