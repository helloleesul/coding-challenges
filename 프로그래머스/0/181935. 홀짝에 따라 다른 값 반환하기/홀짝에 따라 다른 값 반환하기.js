function solution(n) {
    var arr = Array.from({ length: n }, (_, i) => i+1);
    var filtered = arr.filter(i => n%2===0 ? i%2===0 : i%2!==0 );
    return filtered.reduce((a,b)=> n%2===0 ? a + (b ** 2): a + b, 0)
}