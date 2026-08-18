let marks=74;
let bonus=6;
marks+=bonus;
let grade;
if(marks>=90){
    grade="A";
} else if(marks>=70){
    grade="B";
} else if(marks>=50){
    grade="C";
} else{
    grade="F";
}
let result= marks>= 50?"pass":"fail";
let remark;
switch (grade){
    case "A":
        remark="excellent!";
        break;
    case"B":
        remark="good";
        break;
    case"C":
        remark=" average";
        break;
    default:
        remark="needs improvement";
}
console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Remark:", remark);