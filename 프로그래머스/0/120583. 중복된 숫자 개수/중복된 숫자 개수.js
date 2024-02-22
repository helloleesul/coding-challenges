function solution(array, n) {
    // var newArr = [];
    // array.map((a) => {
    //     if(n===a) {
    //         newArr.push(n===a)
    //     }
    // });
    const result = array.filter(item => item === n);

    return result.length;
}