function add() {
    var a, b, c;
    a = Number(document.getElementById("demo1").value);
    b = Number(document.getElementById("demo2").value);
    c = a + b;
    document.getElementById("demo3").value = c;
}

function sub(){
    var a,b,c
    a=Number(document.getElementById("demo1").value)
    b=Number(document.getElementById("demo2").value)
    c=a-b
    document.getElementById("demo3").value=c
}

function mul(){
    var a,b,c
    a=Number(document.getElementById("demo1").value)
    b=Number(document.getElementById("demo2").value)
    c=a*b
    document.getElementById("demo3").value=c
}

function div(){
    var a,b,c
    a =Number(document.getElementById("demo1").value)
    b =Number(document.getElementById("demo2").value)
    c =a/b
    document.getElementById("demo3").value=c
}