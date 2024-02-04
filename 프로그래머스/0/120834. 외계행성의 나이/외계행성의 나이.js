function solution(age) {
    var char = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
    return [...String(age)].map(i => char[i]).join('');
}