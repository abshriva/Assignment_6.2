function greatestNumber()
{
  
    var ref1 = document.getElementById("num1").value;
    var ref2 =document.getElementById("num2").value;
    var ref3 =document.getElementById("num3").value;


    
       if(parseInt(ref1)>parseInt(ref2) && parseInt(ref1)>parseInt(ref3))
       {
        console.log('Greatest Number is :'+parseInt(ref1));
       }
       else if(parseInt(ref2)>parseInt(ref1) && parseInt(ref2)>parseInt(ref3))
       {
        console.log('Greatest Number is :'+parseInt(ref2));
       }
       else
       {
        console.log('Greatest Number is :'+parseInt(ref3));
       }
  
}

