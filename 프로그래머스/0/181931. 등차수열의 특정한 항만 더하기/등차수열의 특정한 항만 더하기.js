function solution(a, d, included) {
    var result = 
Array.from({ length: included.length}, (_, i) => i === 0 ? a : a += d);
    var filtered = result.filter((i,idx) => included[idx] === true);
    return filtered.reduce((a,b) => a+b);
}

// [0]을 a로 시작해서 d만큼 더하고 true인 요소만 더하기