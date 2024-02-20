function solution(num, k) {
    const result = [...String(num)].indexOf(String(k));
    return result === -1 ? result : result+1
}