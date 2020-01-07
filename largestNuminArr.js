function largestOfFour(arr) {
    let currentLargestNuminCurrentArray = [];
    let finalArr = [];
    currentLargestNuminCurrentArray = arr[0][0];

    for (let i = 0; i < arr.length; i++) {
        currentLargestNuminCurrentArray = Math.max(...arr[i]);
        // for (let j = 0; j < arr[i].length; j++) {
        //
        //     // if (arr[i][j] > currentLargestNuminCurrentArray) {
        //     //     currentLargestNuminCurrentArray = arr[i][j]
        //     // }
        // }
        finalArr.push(currentLargestNuminCurrentArray);
        currentLargestNuminCurrentArray = 0;
    }
    return finalArr;

}


// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);