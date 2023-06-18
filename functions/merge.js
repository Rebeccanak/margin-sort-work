//let num = [45,12,6,89,2,5]

function dividedArray(num){
    if(num.length<=1){
        return num;
    }
    let middle = Math.floor(num.length/2);
    let left = num.slice(0,middle);
    let right =num.slice(middle);
    return sortedArray(dividedArray(left),dividedArray(right));

}
function sortedArray(left,right){
     emptyArray =[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift());
        }
        else{
            emptyArray.push(right.shift());
        }
    }
    return [...emptyArray,...left,...right]
}
let num =[45,12,6,89,2,5];
console.log(dividedArray(num))



function binarySearch(num,target){
    let left =0;
    let right = num.length-1;
    while(left<=right){
        let middle =Math.floor((left+right)/2);
        if(num[middle]===target){
            return middle;
        }
        else if(num[middle]>target){
            right =middle-1;
        }
        else{
            left = middle+1
        }
    }
    return null;
}
let nums = dividedArray(num)
let binarySearch = dividedArray(num)
console.log(binarySearch(nums,89));


//takes in an array of number and consoles 
 //the last four items mutiplied by 12 and the first two added by 2