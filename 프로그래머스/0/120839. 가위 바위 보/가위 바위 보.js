function solution(rsp) {
    var ga = 2; // 0
    var ba = 0; // 5
    var bo = 5; // 2
    // return [...rsp].map(v=> v === '2' ? '0' : v === '0' ? '5' : '2').join('');
    
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    return [...rsp].map(v => arr[v]).join("");
}