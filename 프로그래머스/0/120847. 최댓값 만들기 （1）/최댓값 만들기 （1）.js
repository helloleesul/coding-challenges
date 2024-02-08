function solution(numbers) {
    // numbers.sort((a,b) => b-a);
    // return numbers[0]*numbers[1]
    let [a, b] = numbers.sort((a,b) => b - a);
    return a * b;
}