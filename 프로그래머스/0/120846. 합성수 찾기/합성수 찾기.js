function solution(n) {
    let answer = 0;  
    for(let i = 1; i <= n; i++) {
        let 약수갯수 = 0;
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                console.log(`${i}의 약수: ${j}`)
                약수갯수 += 1;
            }
        }
        if(약수갯수 > 2) {
            console.log(`${i}의 약수갯수: ${약수갯수}`)
            answer += 1;
        }
    }
    
    return answer;
}