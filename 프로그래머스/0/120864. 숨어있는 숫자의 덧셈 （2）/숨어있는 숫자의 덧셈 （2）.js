function solution(my_string) {
//     const regex = /\d+/g;
//     const matchedNumbers = my_string.match(regex);

//     if (matchedNumbers) {
//         const numbers = matchedNumbers.map(match => Number(match));
//         return numbers.reduce((acc,v)=>acc+=v,0)
//     } else return 0;
    
    return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
    // 연속된 문자들만 없애고 배열로 남은 숫자 더하기
}