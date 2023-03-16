interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var dongho : User = {
    age:33,
    name:'dongho'
}

// 함수에 인터페이스 활욜
function getUser(User:User) {
    console.log();
}

const capt = {
    age: 10,
    name: '사람'
}

getUser(capt);

// 함수의 수팩(구조)에 인터페이스 활용
interface SumFunction {
    (a: number, b:number):number;
}

var sum: SumFunction;

sum = function(a:number, b:number): number{
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 'comcomcom'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]:RegExp;
}

var obj: StringRegexDictionary = {
    cssFile : /\.css$/,
    jsFile: /\.js$/
}
// obj['cssFile'] = 'a'; // <-- 값 부분이 RegExp 만 올 수 있는데, String으로 변환하려고 해서 에러가 발생함.

Object.keys(obj).forEach(function(value){

})

// 인터페이스 확장

interface Person {
    name:string;
    age:number;
}

interface Developer extends Person {
    language: string;
}

var cap: Developer = {
    language: 'ts',
    name:'캡',
    age:50
}