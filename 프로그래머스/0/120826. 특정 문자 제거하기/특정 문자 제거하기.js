function solution(my_string, letter) {
    // return  [...my_string].filter(i => i !== letter).join('');
    return my_string.replaceAll(letter, '');
}