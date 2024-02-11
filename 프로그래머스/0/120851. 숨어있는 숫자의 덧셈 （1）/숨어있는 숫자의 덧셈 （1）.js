function solution(my_string) {
    var answer = my_string.replace(/[a-z]/ig,'');
    return [...answer].reduce((acc,v) => acc+=Number(v), 0);
}