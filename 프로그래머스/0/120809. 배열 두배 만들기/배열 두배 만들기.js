function solution(numbers) {
//     var answer = [];
//     for (var i = 0; i < numbers.length; i++) {
//         answer[i] = numbers[i] * 2;
//     }
    
//     var answer = numbers.reduce((a, b) => [...a, b * 2], []);
    
    var answer = numbers.map(num => num * 2);
    return answer;
}