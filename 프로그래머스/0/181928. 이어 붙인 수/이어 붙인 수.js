function solution(num_list) {
    var odd = '';
    var even = '';
    num_list.filter(i => i%2 !== 0 ? odd += i : even += i);
    return Number(odd) + Number(even);
}