/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
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
      dfs(heights, 0, i, Number.MIN_SAFE_INTEGER, pacific)
      dfs(heights, heights.length - 1, i, Number.MIN_SAFE_INTEGER, atlantic)
  }

  for (let i = 0; i < heights.length; i++) {
      dfs(heights, i, 0, Number.MIN_SAFE_INTEGER, pacific)
      dfs(heights, i, heights[0].length - 1, Number.MIN_SAFE_INTEGER, atlantic)
  }

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
       if (pacific[i][j] === 1 && atlantic[i][j] === 1)
        result.push([i, j])
    }
  }
  return result
};

// let helper = (heights, row, col, prev, ocean) => {
//   if (row < 0 || row >= heights.length || col < 0 || col >= heights[0].length) return;
//   if (heights[row][col] < prev) return;
//   if (ocean[row][col] === 1) return;

//   ocean[row][col] === 1
//   helper(heights, row + 1, col, heights[row][col], ocean);
//   helper(heights, row - 1, col, heights[row][col], ocean);
//   helper(heights, row, col + 1, heights[row][col], ocean);
//   helper(heights, row, col - 1, heights[row][col], ocean);
// }


// const pacificAtlantic = (matrix) => {
//   if (matrix.length === 0) return [];

//   const pacific = [];
//   const atlantic = [];
//   const result = [];

//   for (let i = 0; i < matrix.length; i++) {
//     pacific[i] = Array(matrix[0].length).fill(0);
//     atlantic[i] = Array(matrix[0].length).fill(0);
//   }

//   // top and botom
//   for (let i = 0; i < matrix[0].length; i++) {
//     dfs(matrix, 0, i, Number.MIN_SAFE_INTEGER, pacific);
//     dfs(matrix, matrix.length - 1, i, Number.MIN_SAFE_INTEGER, atlantic);
//       console.log('pacific top bottom', pacific)
//       console.log('atlantic top bottom', atlantic)
//   }

//   // left and right
//   for (let i = 0; i < matrix.length; i++) {
//     dfs(matrix, i, 0, Number.MIN_SAFE_INTEGER, pacific);
//     dfs(matrix, i, matrix[0].length - 1, Number.MIN_SAFE_INTEGER, atlantic);
//       console.log('pacific left right', pacific)
//       console.log('atlantic left right', atlantic)
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (pacific[i][j] === 1 && atlantic[i][j] === 1) {
//         result.push([i, j]);
//       }
//     }
//   }

//   return result;
// };

function dfs(matrix, row, col, previous, ocean) {
// if we're looking at a valid matrix position
if (!isValid(matrix, row, col)) return;

// ocean can't reach
if (matrix[row][col] < previous) return;

// the ocean was already here
if (ocean[row][col] === 1) return;

ocean[row][col] = 1;
dfs(matrix, row + 1, col, matrix[row][col], ocean);
dfs(matrix, row - 1, col, matrix[row][col], ocean);
dfs(matrix, row, col + 1, matrix[row][col], ocean);
dfs(matrix, row, col - 1, matrix[row][col], ocean);
}

function isValid(matrix, row, col) {
const rowIsValid = row >= 0 && row < matrix.length;
const colIsValid = col >= 0 && col < matrix[0].length;
return rowIsValid && colIsValid;
}