function minJump(height, bigJump) {
  if (bigJump > height) {
    return height;
  }
  let dp = [];
  for (let i = 0; i <= height; i++) {
    if (i < bigJump) {
      dp[i] = i;
    } else {
      dp[i] = dp[i - bigJump] + 1;
    }
  }
  return dp[height]
}

console.log(minJump(8, 6))