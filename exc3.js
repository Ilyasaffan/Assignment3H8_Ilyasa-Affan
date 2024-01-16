function pilihArray(arr, int) {
    const result = [];

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === int) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

console.log(pilihArray([2,1,4,3],5)); // output [[2,3],[1,4]]
console.log(pilihArray([1,10,8,3],11)); // output [[1,10],[8,3]]