function solution(code) {
    const ret = [...code];
    let mode = 0;
    let answer = '';
    
    for(let i = 0; i < ret.length; i++) {
        if(mode === 0) {
            ret[i] === '1' ? mode = 1 : i%2 === 0 && (answer += ret[i]);
        } else {
            ret[i] === '1' ? mode = 0 : i%2 !== 0 && (answer += ret[i]);
        }
    }
    return !answer ? "EMPTY" : answer;
}

/*
문자열 code를 입력 받음, mode는 항상 처음에 0으로 시작

code[idx](리스트 혹은 배열)이(가) "1"이면 mode를 바꿈(mode가 0이었으면 1로, 1이면 0으로)

"1"이 아닐 경우, mode가 0아님 1이냐에 따라 실행하는 것이 다름

3-1. mode = 0일 경우 : idx가 짝수일 때, ret에 code[idx]를 추가 함

3-2. mode = 1일 경우 : idx가 홀수일 때, ret에 code[idx]를 추가 함

이거 다 한 후 ret을 리턴
*/