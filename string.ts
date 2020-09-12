//use function try string and number
function string(person:string){
    console.log(person);
}
string('111')

let string_name:number = 0

function delete_num(n:number){
    let re_name:number = 10
    return function(){
       return re_name - n
    }
}
console.log(JSON.stringify(delete_num(1)()))
console.log(JSON.stringify(delete_num(2)()))

function change_string(str:number){
    string_name = str
}

change_string(5)
console.log(string_name);

// template
let in_name:string = 'jack'
let template:string = `name is ${in_name},age is ${string_name=1}`
console.log(template);

//arrar use
let list:number[] = [1,2,3]
let list1:string[] = ['1','2','3']
let list2:[number,string,any] = [1,'2',3]
let list3:[any] = [1]
let list4:any[] = [1,'1231',12,'name']
let list5:object[] = [{name:'jack',age:11}]

//void return null
function name_void():void{
    console.log('void retunr');
}
name_void()

//object
function setobject(obj:object|null|undefined):void{
    console.log(obj);
}
setobject({})
setobject(null)
setobject([1,2])


//断言
let str_length:number = (<string>in_name).length
console.log(str_length);

//解构
function s_arr([n,m]:[number,string]):void{
    console.log(n+10+m);
}

s_arr([1,'123'])

// function s_obj(obj:{a:string,b?:number}):void{
//     // let {a,b=100} = obj
// }




