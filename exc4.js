function arrSum(arr) {
    if (arr.length === 0) {
        return [[]];
    }

    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0;
    let maxStart = 0;
    let end = 0;

    for (let i = 1; i < arr.length; i++) {
        if (currentSum < 0) {
            currentSum = arr[i];
            start = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxStart = start;
            end = i;
        }
    }

    return [arr.slice(maxStart, end + 1), maxSum];
}

console.log(arrSum([-2,-3,4,-1,-2,1,5,-3])); // output : [[4,-1,-2,1,5],7]