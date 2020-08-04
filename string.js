//use function try string and number
function string(person) {
    console.log(person);
}
string('111');
var string_name = 0;
function delete_num(n) {
    var re_name = 10;
    return function () {
        return re_name - n;
    };
}
console.log(JSON.stringify(delete_num(1)()));
console.log(JSON.stringify(delete_num(2)()));
function change_string(str) {
    string_name = str;
}
change_string(5);
console.log(string_name);
// template
var in_name = 'jack';
var template = "name is " + in_name + ",age is " + (string_name = 1);
console.log(template);
//arrar use
var list = [1, 2, 3];
var list1 = ['1', '2', '3'];
var list2 = [1, '2', 3];
var list3 = [1];
var list4 = [1, '1231', 12, 'name'];
var list5 = [{ name: 'jack', age: 11 }];
//void return null
function name_void() {
    console.log('void retunr');
}
name_void();
//object
function setobject(obj) {
    console.log(obj);
}
setobject({});
setobject(null);
setobject([1, 2]);
//断言
var str_length = in_name.length;
console.log(str_length);
//解构
function s_arr(_a) {
    var n = _a[0], m = _a[1];
    console.log(n + 10 + m);
}
s_arr([1, '1']);
