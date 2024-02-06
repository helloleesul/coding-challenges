function solution(hp) {
    let a = parseInt(hp / 5);
    let b = parseInt((hp - (a * 5)) / 3);
    let c = hp - ((a * 5) + (b * 3));
    return a + b + c;
}