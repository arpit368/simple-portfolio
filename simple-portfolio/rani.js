// let a =  1;
// let b = 2;
// console.log(helllo);
//  console.log("a + b",a + b);
//  console.log("a**b",a**b);

 
// let name = prompt("hello boss");
// console.log(name);
// let student = {
//     name:"rahul kumar",
//     age:20,
//     cgpa:7.3,
//     isPass:true,
// };
// for(let key in student){
// console.log(key,"value=",student[key]);
// }
// let gameNum =25;
// let userNum= prompt("guess the game number ");
// while(userNum!=gameNum){
//     userNum= prompt(" you guess a wrong number , guess again:");
// }
// console.log("congrats, you guess a right number");
menu = document.querySelector('.menu i');
navbar = document.querySelector('.header .navbar');

menu.onclick=()=>{
    navbar.classList.toggle('active');
}   