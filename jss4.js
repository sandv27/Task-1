function check() {
    var a;
    a = Number(document.getElementById("demo1").value);
    if (a>=90 && a<=100)
    {
        document.getElementById("demo2").value = "Grade A";
    }
    else if(a>=80 && a<=90){
        document.getElementById("demo2").value = "Grade B";
    }
    else if (a >= 70 && a<= 80) {
        document.getElementById("demo2").value= "Grade C"
    }
    else{
        document.getElementById("demo2").value = "Grade C"
    }
    
}