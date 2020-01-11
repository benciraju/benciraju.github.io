/*function add(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = parseInt(a)+parseInt(b);
     document.getElementById("result").innerHTML = c;

}
function sub(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = a-b;
    document.getElementById("result").innerHTML = c;

}
function mul(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c =a*b;
    document.getElementById("result").innerHTML = c;

}
function div(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c =a/b;
    document.getElementById("result").innerHTML = c;
}*/

function compute(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var d = document.getElementById('d').value;
 /*   if (d=='+'){    
        c=a+b;
        document.getElementById("result").innerHTML = c;
    }

    if (d=='-'){
        var c=a-b;
        document.getElementById("result").innerHTML = c;
    }
    if (d=='*'){
        var c=a*b;
        document.getElementById("result").innerHTML = c;
    }
    if (d=='/'){         
        var c=a/b;
    document.getElementById("result").innerHTML = c;
    } 
}   */
switch (d){
   case '+':
    c=a+b;
    document.getElementById("result").innerHTML = c;
    break;
   case '-':
    var c=a-b;
    document.getElementById("result").innerHTML = c;
    break;
   case '*':
    var c=a*b;
    document.getElementById("result").innerHTML = c;
    break;
   case '/':
    var c=a/b;
    document.getElementById("result").innerHTML = c;
    break;
}
    }      
        