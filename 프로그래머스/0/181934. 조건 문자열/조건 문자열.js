function solution(ineq, eq, n, m) {
    var result = `${n}${eq === '!' ? ineq : ineq+eq}${m}`
    return new Function("return " + result)()?1:0;
}