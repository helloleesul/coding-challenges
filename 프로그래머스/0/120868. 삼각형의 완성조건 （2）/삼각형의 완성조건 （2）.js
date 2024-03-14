function solution(sides) {
    return Math.min(...sides) * 2 - 1;
}
// 두 변을 알고 있을때 두가지 경우

// 1. 이미 아는 변 중의 하나가 가장 긴 경우
// (a < b 의 경우)
// 1의 경우에는
// b < a + c
// a를 좌측으로 이항하면
// 즉, b - a < c

// 2. 모르는 변이 가장 긴 경우
// c < a + b

// 따라서 c의 값은 b - a < c < b + a인데
// 우측항에서 좌측항 - 1이 c의 개수이므로
// c의 개수는 (a + b) - (b - a) => 2a - 1