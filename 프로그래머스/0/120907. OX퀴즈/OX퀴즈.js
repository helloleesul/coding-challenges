function solution(quiz) {
    return quiz.map(v => {
        const i = v.split(' = ');
        const [n, r] = i;
        return eval(n) == r ? 'O' : 'X'
    })
}