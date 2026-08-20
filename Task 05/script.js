// even or odd
const check=(num)=>{
if(num%2===0){
return"Even";
}else{
return"Odd";
}
};
console.log(check(4));
console.log(check(7));
console.log(check(0));

// result evaluator
function evaluateResult(marks){
if(marks<0||marks>100){
console.log("Invalid marks");
return null;
}
if(marks>=50){
return"Pass";
}else{
return"Fail";
}
}
console.log(evaluateResult(75));
console.log(evaluateResult(40));
console.log(evaluateResult(120));

// maximum finder
const findMax=(a,b,c)=>{
let largest=a;
if(b>largest){
largest=b;
}
if(c>largest){
largest=c;
}
return largest;
};
console.log(findMax(10,25,15));
console.log(findMax(5,3,8));
console.log(findMax(9,9,2));

// sum from 1 to n
function sumToN(n){
let total=0;
for(let i=1;i<=n;i++){
total=total+i;
}
return total;
}
console.log(sumToN(5));
console.log(sumToN(10));

// multiplication table
function printTable(num){
for(let i=1;i<=10;i++){
console.log(num+" x "+i+" = "+(num*i));
}
}
printTable(3);

// digit counter
function countDigits(num){
if(num===0){
return 1;
}
if(num<0){
num=-num;
}
let count=0;
while(num>0){
num=Math.floor(num/10);
count++;
}
return count;
}
console.log(countDigits(1234));
console.log(countDigits(9));
console.log(countDigits(10000));

// number reverser
function reverseNumber(num){
let reverse=0;
while(num>0){
let digit=num%10;
reverse=reverse*10+digit;
num=Math.floor(num/10);
}
return reverse;
}
console.log(reverseNumber(1234));
console.log(reverseNumber(500));
console.log(reverseNumber(91));

// factorial
function factorial(num){
let answer=1;
for(let i=1;i<=num;i++){
answer=answer*i;
}
return answer;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));

// prime validator
function isPrime(num){
if(num<2){
return false;
}
for(let i=2;i<num;i++){
if(num%i===0){
return false;
}
}
return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));

// star pattern
function printPattern(rows){
for(let i=1;i<=rows;i++){
let stars="";
for(let j=1;j<=i;j++){
stars=stars+"*";
}
console.log(stars);
}
}
printPattern(4);