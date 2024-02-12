function solution(s) {
    var answer = s.split(' ');
    return answer.reduce((acc,v,i) => {
      return v === 'Z' ? acc-=Number(answer[i-1]) : acc+=Number(v)
    },0);
}