// console.log("Assignment.js is loaded sucessfully");
// console.log(3+4);
// let score=8;
// console.log("score: "+score);
// const arr=[1,2,3];
// const arr2=[4,5,6];
// const arr3=[...arr,...arr2];
// console.log(arr3);
// console.log(arr.pop());
// console.log(arr.push(4));
// console.log(arr);
// console.log(arr.unshift());
// console.log(arr3.slice(1,3));
// console.log(arr.length);
// let number=[1,2,3,4,5];
// let newNumber=number.map((num)=>num*2);
// let result= number.filter((num)=>num >= 2);
// console.log(number);
// console.log(newNumber);
// console.log(result);
const students = [{name:"keerthu",marks:90},{name:"sai",marks:80},{name:"diya",marks:70}];

students.filter(student => student.marks >= 80).map(student => student.marks+10).forEach(name => console.log(name));
const kiran = students.find(student => student.name === "kiran");
console.log(kiran ? kiran.marks : "Not found");
const marks = {name:"keerthu",marks:90,
    showmark() {return "keerthu scored " + this.marks}};
    console.log(marks.showmark());