const { LOG } = require("./const")

const chunkFinder = (arr, subArr, index, checkValue, divider, tmpItem) => {

    if (subArr?.length >= divider ) {
        return subArr
    }
    const check = arr?.slice(index)?.find(i => i === tmpItem)

    let initialIndex = index
    
    if (!!check) {
        initialIndex = arr?.indexOf(check)
    } 

    if (tmpItem <= arr[initialIndex]) {
        if (arr[initialIndex] - tmpItem <= checkValue) {
            subArr.push(arr[initialIndex])
        }
    } else {
        if (tmpItem - arr[initialIndex] <= checkValue) {
            subArr.push(arr[initialIndex])
        }
    }

    return chunkFinder(arr, subArr, initialIndex + 1, checkValue, divider, arr[index])
}



module.exports = {
    chunkFinder
};
