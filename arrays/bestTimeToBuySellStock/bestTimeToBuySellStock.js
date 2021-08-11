/**
 * @param {number[]} prices
 * @return {number}
 */

///BRUTE FORCE O(n^2)
 var maxProfit = function(prices) {
  let bestBuy = 0;
  let bestDeal = 0;
  for (var i = 0; i < prices.length; i++) {
      for (var j = i + 1; j < prices.length; j++) {
          bestDeal = Math.max(bestDeal, prices[j] - prices[i]);
          if (bestDeal > bestBuy) {
              bestBuy = bestDeal
          }
      }
  }
  return bestBuy
};

//o(n) time
/**
 * @param {number[]} prices
 * @return {number}
 */
//  var maxProfit = function(prices) {
//     let maxP = 0;
//     let currentMin = prices[0];
//     for (let i = 1; i < prices.length; i++) {
//       currentMin = Math.min(currentMin, prices[i]);
//       maxP = Math.max(prices[i] - currentMin, maxP)
//     }
//     return maxP
// };


let maxProfit = function (prices) {
    let maxP = 0;
    let currentMin = prices[0];
    for (let i = 1; i < prices.length; i++) {
        currentMin = Math.min(currentMin, prices[i]);
        maxP = Math.max(maxP, prices[i] - currentMin)
    }
    return maxP
}


Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.