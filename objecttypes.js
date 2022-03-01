function processObject(s) {
    console.log(s.sno, s.name, s.city);
}
function processProject(_a) {
    var sno = _a.sno, name = _a.name, city = _a.city;
    console.log("processed ", sno, name, city);
}
processObject({ sno: 1, name: "Robert", city: "Jaipur" });
processProject({ sno: 2, name: "Rahul" });
