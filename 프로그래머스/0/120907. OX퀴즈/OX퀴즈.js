function solution(quiz) {
    return quiz.map(v => {
        const i = v.split(' ');
        const [n,o,m,_,r] = i;
        return eval(`${n} ${o} ${m}`) == r ? 'O' : 'X';
    })
}