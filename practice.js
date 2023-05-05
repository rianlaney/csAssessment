// // question 1
const addToZero = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === []){
            //checks for empty array
            console.log(false)
            // checks for only 1 num
        } else if (arr[i] === 0) {
            console.log(false)
            // adds two numbers
        } else {
            for(let j=0; j<arr.length; j++){
                arr[i]+arr[j]===0 ? console.log(true) : console.log(false)    
        }
    }
}
}


addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

//====================================================================
// question 2 
// const hasUniqueChars = (str) => {
//     let myStr = str.split('')
//     let strSet = new Set(myStr)
//     if(strSet.size === myStr.length){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
    
//  }

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// -> False


//==================================================================
// question 3
// const isPangram = (str) => {
//     let set = new Set();
//     for (let ch of str) {
//         if (ch >= 'a' && ch <= 'z') {
//             set.add(ch);
//         }
//         if (ch >= 'A' && ch <= 'Z') {
//             ch = ch.toLowerCase();
//             set.add(ch);
//         }
//     }
 
//     if (set.size === 26) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
 


// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // False


//==============================================================
// question 4
// const findLongestWord = (arr) => {
//     return arr.reduce((a, b) => a.length < b.length ? b : a, "");
// }

// console.log(findLongestWord(["hi", "hello"]))
// // 5