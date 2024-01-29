function solution(a, b) {
    const calcA = [a,b].join('');
    const calcB = [b,a].join('')
    return calcA > calcB ? Number(calcA) : Number(calcB);
}