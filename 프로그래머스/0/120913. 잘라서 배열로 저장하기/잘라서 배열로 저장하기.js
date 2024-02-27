function solution(my_str, n) {
//     const answer = [];
//     const new_str = [...my_str];
    
//     while (new_str.length) {
//         answer.push(new_str.splice(0, n).join(''));
//         console.log(new_str, answer);
//     }
//     return answer;
    return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}