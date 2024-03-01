function solution(my_string) {
    const regex = /\d+/g;
    const matchedNumbers = my_string.match(regex);

    if (matchedNumbers) {
        const numbers = matchedNumbers.map(match => Number(match));
        return numbers.reduce((acc,v)=>acc+=v,0)
    } else return 0
}