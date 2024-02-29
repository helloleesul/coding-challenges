function solution(numbers) {
    const result = numbers.sort((a,b)=>a-b)
    return Math.max(result[0] * result[1], result[result.length-1] * result[result.length-2])
}