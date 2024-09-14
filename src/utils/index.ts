import { EValue } from '../type';

export function checkWin(
  board: EValue[][],
  row: number,
  col: number,
  player: EValue
) {
  const n = board.length; // Kích thước bàn cờ
  const winCondition = 5; // Điều kiện để chiến thắng là 5 nước liên tiếp
  const opponent = player === EValue.First ? EValue.Second : EValue.First; // Người chơi đối phương

  // Hàm kiểm tra một hướng và xem có bị chặn 2 đầu không
  function countInDirection(dx: number, dy: number) {
    let count = 1;
    let blockedStart = false;
    let blockedEnd = false;

    // Đếm về một phía (hướng dương)
    for (let i = 1; i <= winCondition; i++) {
      const newRow = row + i * dx;
      const newCol = col + i * dy;
      if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
        if (board[newRow][newCol] === player) {
          count++;
        } else if (board[newRow][newCol] === opponent) {
          blockedEnd = true; // Bị chặn bởi đối thủ
          break;
        } else {
          break; // Gặp ô trống thì dừng lại
        }
      }
    }

    // Đếm về phía còn lại (hướng âm)
    for (let i = 1; i <= winCondition; i++) {
      const newRow = row - i * dx;
      const newCol = col - i * dy;
      if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
        if (board[newRow][newCol] === player) {
          count++;
        } else if (board[newRow][newCol] === opponent) {
          blockedStart = true; // Bị chặn bởi đối thủ
          break;
        } else {
          break; // Gặp ô trống thì dừng lại
        }
      }
    }

    // Nếu đủ số lượng nước và không bị chặn cả 2 đầu thì trả về true
    if (count >= winCondition && !(blockedStart && blockedEnd)) {
      return true;
    }

    return false;
  }

  // Kiểm tra hàng ngang (dx = 0, dy = 1)
  if (countInDirection(0, 1)) return true;

  // Kiểm tra cột dọc (dx = 1, dy = 0)
  if (countInDirection(1, 0)) return true;

  // Kiểm tra đường chéo chính (dx = 1, dy = 1)
  if (countInDirection(1, 1)) return true;

  // Kiểm tra đường chéo phụ (dx = 1, dy = -1)
  if (countInDirection(1, -1)) return true;

  return false; // Không tìm thấy chiến thắng
}
