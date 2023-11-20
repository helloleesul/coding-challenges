function solution(numbers) {
    return numbers.reduce((prev, next)=> prev + next) / numbers.length
}