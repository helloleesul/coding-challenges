function solution(num_list, n) {
    const answer = [];
    
    // for(let i = 0; i < num_list.length / n; i++) {
    //      answer.push(num_list.slice(i * n, i * n + n));
    // }
    
    while(num_list.length) {
        answer.push(num_list.splice(0,n));
        console.log(answer, num_list)
    }
    
    return answer
}