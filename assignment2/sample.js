const prices = [120, 60, 899];
console.log(prices.reduce((total, price) => total + price, 0));
const students = [{name:"kiran",marks:90},{name:"sai",marks:80},{name:"diya",marks:70}];
const student = students.find(student => student.name === "kiran");
console.log(student ? student.marks : "Not found");
const makeGreet=(Greeting) =>(name)=>`${Greeting} ${name}`;
console.log(makeGreet("Hello")("Asha"));