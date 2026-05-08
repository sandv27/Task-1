function check() {
    var a;
    a = Number(document.getElementById("demo1").value);
    if (a % 2==0) {
        document.getElementById("demo2").value = "Even";
    }
    else  {
        document.getElementById("demo2").value = "Odd";
    }

}