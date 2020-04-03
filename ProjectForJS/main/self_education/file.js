document.write("Me in JS Project!");
const a = 10, h = 3;

function srec(obj) {
    obj.res.value = obj.num1.value * obj.num1.value;
}
function f() {
    form_2.res.value = form_2.num1.value * 2;
}
function change(){
    var d = document;
    var l = d.pm1.src;
    d.pm1.src = d.pm2.src;
    d.pm2.src = l;
}

document.write("\nAnswer for hard question ", care(a,h));