function solution(keyinput, board) {
    const [width, height] = board;
    let x = 0;
    let y = 0;

    for (const direction of keyinput) {
        switch (direction) {
            case "left":
                if (x > -(width - 1) / 2) {
                    x--;
                }
                break;
            case "right":
                if (x < (width - 1) / 2) {
                    x++;
                }
                break;
            case "up":
                if (y < (height - 1) / 2) {
                    y++;
                }
                break;
            case "down":
                if (y > -(height - 1) / 2) {
                    y--;
                }
                break;
            default:
                // 무시
                break;
        }
    }

    return [x, y];
}