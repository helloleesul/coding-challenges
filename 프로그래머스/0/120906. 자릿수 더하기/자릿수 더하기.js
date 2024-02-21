function solution(n) {
    return [...String(n)].reduce((acc,v) => acc += Number(v), 0)
}