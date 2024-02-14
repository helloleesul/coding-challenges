function solution(array, n) {
    return array.reduce((acc,v,i) => {
        const a = Math.abs(v-n);
        const b = Math.abs(acc-n);
        return a < b ? v : a === b ? Math.min(acc,v) : acc;
    })
}