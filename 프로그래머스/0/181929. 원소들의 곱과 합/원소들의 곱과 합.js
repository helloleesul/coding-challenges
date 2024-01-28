function solution(num_list) {
    var answer = num_list.reduce((prev, i)=> prev * i);
    var answer2 = num_list.reduce((prev, i)=> prev + i);
    return answer < answer2 ** 2 ? 1 : 0;
}