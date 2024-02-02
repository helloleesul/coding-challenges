function solution(num_list) {
    var answer1 = num_list.filter((item) => (item % 2 === 0));
    var answer2 = num_list.filter((item) => (item % 2 !== 0));
    return [answer1.length,  answer2.length];
}