var pacificAtlantic = function(heights) {
  if (heights.length === 0) return [];
  let pacific = [];
  let atlantic = [];
  let result = [];

  for (let i = 0; i < heights[0].length; i++) {
  pacific[i] = Array(heights[0].length).fill(0)
  atlantic[i] = Array(heights[0].length).fill(0)
  }

  for (let i = 0; i < heights[0].length; i++) {
      helper(heights, 0, i, Number.MIN_SAFE_INTEGER, pacific)
      helper(heights, heights.length - 1, i, Number.MIN_SAFE_INTEGER, atlantic)
  }

  for (let i = 0; i < heights.length; i++) {
      helper(heights, i, 0, Number.MIN_SAFE_INTEGER, pacific)
      helper(heights, i, heights[0].length - 1, Number.MIN_SAFE_INTEGER, atlantic)
  }

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
       if (pacific[i][j] === 1 && atlantic[i][j] === 1)
        result.push([i, j])
    }
  }
  return result
};

let helper = (heights, row, col, prev, ocean) => {
if (row < 0 || row >= heights.length || col < 0 || col >= heights[0].length) return;
if (heights[row][col] < prev) return;
if (ocean[row][col] === 1) return;

ocean[row][col] = 1
helper(heights, row + 1, col, heights[row][col], ocean);
helper(heights, row - 1, col, heights[row][col], ocean);
helper(heights, row, col + 1, heights[row][col], ocean);
helper(heights, row, col - 1, heights[row][col], ocean);
}
