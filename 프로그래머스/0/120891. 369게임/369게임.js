function solution(order) {
    // const arr = Array.from(String(order),(v)=>Number(v));
    // return arr.reduce((acc,v) => {
    //     const game = [3, 6, 9];
    //     game.forEach(i => i === v ? (acc += 1) : acc);
    //     return acc;
    // }, 0);
    return [...order.toString().matchAll(/[3|6|9]/g)].length;
}