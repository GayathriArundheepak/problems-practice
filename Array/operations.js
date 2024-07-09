// 1.Given the array [1, 2, 4, 5], insert the number 3 between 4 and 5.
console.log('Hello, World!');
let arr1 =  [1, 2, 4, 5];
arr1.splice(3, 0, 3);
console.log(arr1);
//2. Remove the third element from the array [10, 20, 30, 40, 50].
let arr2 =[10, 20, 30, 40, 50];
arr2.splice(2,1)
console.log(arr2);
// 3.Replace the second element in the array [5, 10, 15] with 20.
let arr3 =  [5, 10, 15];
// arr3.splice(1,1,20)
//OR
arr3[1]=20;
console.log(arr3);

//4. Add the elements 7 and 8 at the end of the array [1, 2, 3, 4, 5].
arr4= [1, 2, 3, 4, 5];
arr4.push(7,8);
console.log(arr4);

// 5.Insert the element 99 at the beginning of the array [10, 20, 30].
let arr5 =[10, 20, 30];
arr5.unshift(99)
console.log(arr5);
// 6Remove the last element from the array [2, 4, 6, 8, 10].
let arr6 =[2, 4, 6, 8, 10];
arr6.pop(arr6.length-1)
console.log(arr6);
// 7.Replace all occurrences of 5 with 50 in the array [5, 10, 5, 20, 5].
let arr7 = [5, 10, 5, 20, 5];
 
let ansArr7 = arr7.map(num => (num === 5 ? 50 :num))
console.log(ansArr7);

//8 Given the array [3, 6, 9, 12, 15], insert 0 at index 2.
let arr8 =[3, 6, 9, 12, 15];
arr8[2]=0;
console.log(arr8);
// 9.Remove all even numbers from the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
let arr9 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 arr9 = arr9.filter(num=>(num % 2 !== 0 ))
 console.log(arr9);
// 10.Given the array [5, 10, 20, 30], insert 15 between 10 and 20.
let arr10 =[5, 10, 20, 30];
arr10.splice(2,0,15)
console.log(arr10);
// 11.Remove the element at index 3 from the array [100, 200, 300, 400, 500].
let arr11 =[100, 200, 300, 400, 500];
arr11.splice(3,1)
console.log(arr11)
//12. Replace the last element in the array [1, 2, 3, 4, 5] with 10.
    let arr12 = [1, 2, 3, 4, 5] ;
     arr12[arr12.length-1]=10;
     console.log(arr12)
// 13.Add the elements 8, 9, and 10 at the beginning of the array [1, 2, 3, 4, 5].
  let arr13 =[1, 2, 3, 4, 5];
  arr13.unshift(8,9,10)
  console.log(arr13)
//14. Remove the first occurrence of 7 from the array [7, 14, 21, 7, 28].
let arr14 =[7, 14, 21, 7, 28];
let i =arr14.indexOf(7)
 arr14.splice(i,1)
console.log(arr14)
// Insert the elements 25 and 30 at the end of the array [10, 20].
let arr15 =[10, 20];
arr15.push(25,30)
console.log(arr15)
// 16.Replace all occurrences of 0 with 1 in the array [0, 1, 0, 1, 0].
let arr16 =[0, 1, 0, 1, 0];
arr16 = arr16.map(num =>(num === 0 ? 1 : num))
console.log(arr16)
// 17.Given the array [5, 10, 15, 20, 25], insert 12 between 10 and 15.
arr17=[5, 10, 15, 20, 25];
index =arr17.indexOf(15)
arr17.splice(index,0,12)
console.log(arr17)
// 18.Remove the second-to-last element from the array [2, 4, 6, 8, 10].
arr18 =[2, 4, 6, 8, 10];
arr18.splice(arr18.length -2,1)
console.log(arr18)
// 19.Replace the element at index 1 in the array [3, 6, 9] with 12.
let arr19 =  [3, 6, 9]
arr19[1]=12;
console.log(arr19)
//20. Add the elements 100 and 200 at the beginning of the array [300, 400, 500].
arr20 =[300, 400, 500]
arr20.unshift(100,200)
console.log(arr20)
//21. Remove all occurrences of 42 from the array [42, 42, 42, 42, 42].
let arr21 = [42, 42, 42, 42, 42]
arr21 =  arr21.filter(num => (num !== 42))
console.log(arr21)
// 22.Insert the element 7 at the end of the array [1, 2, 3, 4, 5, 6].
let arr22 =[1, 2, 3, 4, 5, 6];
arr22.push(7)
console.log("22:",arr22)
// Replace the last occurrence of 8 with 80 in the array [8, 16, 24, 8, 32].
let arr23 =[8, 16, 24, 8, 32];
let index23=arr23.lastIndexOf(8)
console.log("23:",index23)
// Given the array [2, 4, 6, 8, 10], insert 5 between 4 and 6.
let arr24 = [2, 4, 6, 8, 10];
arr24.splice(2,0,5)
console.log("24:",arr24)
//25. Remove all elements from the array [11, 22, 33, 44, 55].
let arr25=[11, 22, 33, 44, 55];
arr25.length =0;
console.log("25:",arr25)
// 26.Replace the first element in the array [7, 14, 21] with 10.
let arr26 =[7, 14, 21];
arr26[0]=10
console.log("26:",arr26)
// 27.Add the elements 1 and 2 at the end of the array [3, 4, 5].
let arr27 =[3,4,5]
arr27.push(1,2)
console.log("27:",arr27)
// 28.Remove the element at index 0 from the array [50, 40, 30, 20, 10].
let arr28 =[50, 40, 30, 20, 10];
arr28.shift()
console.log("28:",arr28)
// 29.Replace all occurrences of 6 with 60 in the array [6, 12, 18, 6, 30].
let arr29 =[6,12,18,6,30];
arr29 =arr29.map(num=>(num ===6 ?60 :num))
console.log("29:",arr29)
// 30.Given the array [3, 6, 9, 12, 15], insert 7 at index 3.
let arr30 =[3, 6, 9, 12, 15];
arr30[3]=7
console.log("30:",arr30)