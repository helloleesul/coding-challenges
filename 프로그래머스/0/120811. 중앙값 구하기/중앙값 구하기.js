function solution(array) {
    array.sort((a, b) => a - b);
    var val = parseInt(array.length / 2);
    return array[val];
}