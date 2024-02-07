function solution(box, n) {
    return box.reduce((result, curr) => {
        result *= Math.floor(curr / n);
        return result;       
    }, 1);
}