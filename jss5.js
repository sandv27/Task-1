function check() {
    var a;
    a = Number(document.getElementById("demo1").value);
    var text=""
    switch(a)

    {
        case 1:text = "Sunday";
            break;
        case 2: text = "Monday";
            break;
        case 3: text = "Tuesday";
            break;
        case 4: text = "Wednesday";
            break;
        case 5: text = "Thursday";
            break;
        case 6: text = "Friday";
            break;
        case 7: text = "Saturday";
            break;
         
        default: text ="Default"
            break

    }
    document.getElementById("demo2").value=text

}