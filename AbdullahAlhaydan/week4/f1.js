
function firstFun(mynum)
{
    var x = document.getElementById("mynum").value;
   x =  parseInt(x);

    if(x % 3 == 0 )
    document.getElementById("dis").innerHTML = "Pling";
    //document.write("Pling");
    else if (x % 5 == 0)
    document.getElementById("dis").innerHTML = "Plang";
    //document.write("Plang");
    else if ( x % 7 == 0)
    document.getElementById("dis").innerHTML = "Plong";
   // document.write("Plong");
    else
    document.getElementById("dis").innerHTML = x;
   // document.write(x);

   console.log(typeof(x));
    

}