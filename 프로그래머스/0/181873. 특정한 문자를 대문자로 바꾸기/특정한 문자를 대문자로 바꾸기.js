function solution(my_string, alp) {
    // return [...my_string].map(a => a === alp ? a.toUpperCase() : a).join('');
    return my_string.replaceAll(alp, alp.toUpperCase())
}