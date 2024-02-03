function solution(n, k) {
    var yang = 12000;
    var drink = 2000;
    var dc = Math.floor(n / 10) * drink

    return (yang * n + drink * k) - dc;
}