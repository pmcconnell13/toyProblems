/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  const rowRules = new Array(9).fill().map(() => new Set());
  const columnRules = new Array(9).fill().map(() => new Set());
  const mixedRules = new Array(9).fill().map(() => new Set());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let curr = board[row][col]
      let mixed = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (curr === '.') {
          continue;
      }

      let a = rowRules[row].has(curr)
      let b = columnRules[col].has(curr)
      let c = mixedRules[mixed].has(curr)
      if (a || b || c) {
        return false
      }

        console.log(mixedRules)

      rowRules[row].add(curr);
      columnRules[col].add(curr);
      mixedRules[mixed].add(curr);
    }
  }

  return true
};

Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false