// map
const arr=[1,2,3,4,5];
const arr1 = arr.map((e,i)=>i===2 ?e*2 : e )
console.log(arr1);

// filter
const arr2 = arr.filter(e=>e%2==0)
console.log(arr2);

const ar = [{id:"0",age:"17"},{id:"1",age:"18"},{id:"2",age:"18"}];
const ar1 = arr.filter(e=>e.age==="18")
console.log(arr1);

//reduce
const arr3 =arr.reduce((previous,next)=>(previous+next))
console.log(arr3);

// Spread Operator
const sp = [1,2,2,3,4,4];
const sp2=[4,...sp,5,7];
console.log(sp2);


const duplicate = [1,2,2,3,4,4];
const remDuplicate = [...new Set(duplicate)]
console.log(remDuplicate)
