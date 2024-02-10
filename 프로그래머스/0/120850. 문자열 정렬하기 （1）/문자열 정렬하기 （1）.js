function solution(my_string) {
    return [...my_string].map(v => Number(v)).filter(v => !isNaN(v)).sort();
}