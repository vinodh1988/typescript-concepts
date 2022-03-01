function fun(sno, name) {
    if (sno % 2 == 0)
        return sno + "";
    else
        return name;
}
fun(1, "Raj");
function callit(x) {
    console.log("fun started running");
    x("Industry");
}
//callit(23)
//callit("raj")
callit(function (x) {
    console.log(x);
});
