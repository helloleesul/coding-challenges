function solution(num_list) {
    return num_list.reduce((prev, next)=> num_list.length > 10 ? prev+next : prev*next);
}