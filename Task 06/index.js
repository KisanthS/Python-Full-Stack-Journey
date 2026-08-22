// loop via arr
const numbers=[10,20,30,40];
for(let i=0;i<numbers.length;i++){
console.log(numbers[i]);
}
numbers.forEach((value)=>{
console.log(value);
});
for(const value of numbers){
console.log(value);
}
for(const index in numbers){
console.log(numbers[index]);
}

//loop via obj
const student={name:"Bala",age:21,grade:"A"};
for(const key in student){
console.log(key,student[key]);
}

//map
const marks=[50,60,70,80];
const updatedMarks=marks.map((value)=>{
return value-10;
});
console.log(updatedMarks);

//filter
const values=[5,12,8,25,3,15];
const filteredValues=values.filter((value)=>{
return value>10;
});
console.log(filteredValues);

//reduce
const nums=[5,10,15,20];
const total=nums.reduce((previous,current)=>{
return previous+current;
},0);
console.log(total);