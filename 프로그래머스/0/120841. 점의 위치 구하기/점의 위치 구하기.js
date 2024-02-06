function solution(dot) {
    const isPositive = dot.map(i => i > 0);
    const [x, y] = isPositive;
    
    if(x && y) return 1;
    else if (!x && y) return 2;
    else if (!x && !y) return 3;
    else return 4;
}