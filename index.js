
const nums = [2, 7, 11, 15]; //[2, 7, 11, 15, 7, 2], //[4, 11, 12, 5]
const target = 9;

function findSumOfTwoIndices(nums, target) {

    // Check if the input array is valid or not and has at least two elements
    if (!Array.isArray(nums)) {
        throw new Error("The input array is not an valid array.");
    } else if(nums.length < 2){
        throw new Error("The input array must contain at least two elements.");
    }

    let tempObj = {};

    for (let i = 0; i < nums.length; i++) {
        let k = target - nums[i];
        // If the k exists, return the indices
        if (tempObj[k] !== undefined) {
            return [tempObj[k], i];
        }
        tempObj[nums[i]] = i;
    }

    // If no solution is found
    throw new Error("No solution found. Input would have exactly one solution.");
}

//Output
console.log("Result indices of the two numbers ", findSumOfTwoIndices(nums, target));
