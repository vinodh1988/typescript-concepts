function fun(a) {
    a("store");
    console.log("Finished the function");
}
function accept(a) {
    var result = a(43);
    console.log("result is ", result);
}
accept(function (x) { return x % 2 == 0; });
accept(function (x) { return x; });
fun(function (x) { return console.log("We are processing it ", x); });
