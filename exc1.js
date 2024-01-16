// deret aritmatika
function seleksiAritmatika(number) {
    const selisihPertama = number[1]-number[0] ;

    for(i=2; i<number.length; i++){
        if (number[i]-number[i-1]!== selisihPertama) {
            return false;
        }
    }
    return true;
}

console.log(seleksiAritmatika([1,2,3,4]));
console.log(seleksiAritmatika([2,4,6,17]));