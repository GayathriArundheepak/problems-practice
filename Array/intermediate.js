// 1.Rotate an array to the right by a given number of steps?

function arrRotationRight(arr,steps){
    let n = arr.length;
    steps = steps % n
for(i=steps;i>0;i--){
    arr.unshift(arr.pop())
     console.log(arr)
 
}
return arr

   // Use slicing and concatenation to rotate the array
//    let rotatedArray = arr.slice(-steps).concat(arr.slice(0, n - steps));
//    return rotatedArray;
}
console.log(arrRotationRight([1,2,3,4,5],6))
// Pop Operation: Removing the last element of the array takes 𝑂(1 )
// O(1) time.
// Unshift Operation: Adding an element to the beginning of the array takes  O(n )time.

// O(steps⋅n)


// 2.Find the maximum product of two elements in an array?
function maxProductTwoElements(arr){
    let max= arr[0];
    let secondMax =arr[0]
    for (i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondMax=max;
            max =arr[i]
        }
        if(arr[i]>secondMax && arr[i]< max){
            secondMax=arr[i]
        }
    }
    return max *secondMax
}
console.log(maxProductTwoElements([1,2,3,4,5]))

// 3.Remove duplicates from a sorted array in place

  function removeDuplicate(arr){
//   for(i=0;i<arr.length-1;i++){
//     for(j=i+1;j<arr.length;j++){
//         if (arr[i] === arr[j]){
//             arr.splice(j,1)
//         }
//     }
//   }
//   return arr
let set = new Set(arr)
let uniqueArr =[...set]

 return uniqueArr
  
}
  console.log(removeDuplicate([44,22,44,66,77,22,77]))

// 4.  Merge two sorted arrays:

function MergeTwoArr(arr1,arr2){
let i=j=0;
let  mergedArr=[];
while(i<arr1.length && j< arr2.length){
    if(arr1[i]< arr2[j]){
        mergedArr.push(arr1[i])
        i++
    }else{
        mergedArr.push(arr2[j])
        j++
    }
}
while(i< arr1.length){
    mergedArr.push(arr1[i])
    i++
}
while(j< arr2.length){
    mergedArr.push(arr2[j])
    j++
}
return  mergedArr

}

console.log( MergeTwoArr([44,66,77,77],[12,18,45,88,401]))

// 5.Move all zeroes to the end of an array:

function moveZeros(arr){
    let i=0;
    for(j=0;j<arr.length;j++){
        if(arr[j] !== 0){
        [arr[i],arr[j]]= [arr[j],arr[i]]
        i++
        }
    }
    return arr
}
console.log(moveZeros([44,22,0,66,0,22,7]))

//6.Find the second largest and second smallest elements in an array:

function  secondLargestAndSecondSmallest(arr){
    let n = arr.length;
    // arr.sort((a,b)=>a-b)
    // let sl = arr[n-2]
    // let sm = arr[1]  // if no duplicates
ss =arr[0]
sl =arr[0]
s =arr[0]
l =arr[0]
for (x of arr){
    if(x < s){
        ss=s
        s=x;
    }
    if(x > l ){
        sl =l
        l= x  
    }
    if(x > sl  && x < l){
        sl =x
      
    }
    if(x < ss  && x > s){
        ss =x
      
    }
}

    return [ss,sl]
}
console.log(secondLargestAndSecondSmallest([44,22,0,66,0,22,7]))

//7.Count the frequency of an element in an array

function frequency(arr,element){
    if(arr.includes(element)){
       let count =0;
       for(x of arr){
        if(x === element){
          count++;
        }
       }
       return count
    }else{
        return 'The element is not exist in the array'
    }
}
console.log(frequency([7,44,22,32,7,18,7,10,66,7,100,22,7],7))

// 8.Find the kth largest element in an array:

 function KthLargestElement(arr,k){
arr.sort((a,b)=>b-a)
let set = new Set(arr);
console.log(arr)
arr= [...set]
console.log(arr)
return arr[k-1]
 }
 console.log(KthLargestElement([7,44,22,32,7,18,7,10,66,7,100,22,7],7))


// 9. Find the kth smallest element in an array

function KthSmallestElement(arr,k){
    arr.sort((a,b)=>a-b)
    let set = new Set(arr);
    console.log(arr)
    arr= [...set]
    console.log(arr)
    return arr[k-1]
     }
     console.log(KthSmallestElement([7,44,22,32,7,18,7,10,66,7,100,22,7],7))

     //10.Find all pairs in an array whose sum is equal to a given number:

     function SumOfTwoElements(arr,target){
        let result =[]
        for(let i=0;i<arr.length-1;i++){
            for(let j=i+1;j<arr.length;j++){
             if(arr[i]+arr[j] ===  target){
            result.push([arr[i],arr[j]])
             }
            }
        }
        return result
     }
     console.log(SumOfTwoElements([44,32,18,7,10,66,100,22,0],32))

  //Find the subarray with the maximum sum (Kadane’s Algorithm):
  function maxSubArraySum(arr) {
    
  }