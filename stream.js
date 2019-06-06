let myArray = ['Ian', 'Chris', 'matt', 'Shazad','johnny'];
//forEach
// let result = myArray.forEach((x) => {
//    console.log('Hi' + x)
// });

//map
// let result = myArray.map((x) => {
//    return 'Hi';
// });

//filter
// const a = myArray.filter((x) => {
//     if(x.length > 4){
//         return true;
//     }
//     });

const a = myArray.reduce((a,v,i)=>{ 
    return a +=   i;
});



console.log(a);
