const { LOG } = require("../utils/const");
const { chunkFinder } = require("../utils/recursive");

const divideChunkArray = function (arr, checkValue, divider) {
    const outputArr = [];

    if (arr?.length % divider !== 0) {
        return outputArr;
    }

    const roundsCounter = arr?.length / divider - 1;

    let counter = 0;

    for (let index = 0; index < 2; index++) {
        if (outputArr?.length === divider) {
            return outputArr
        }
        if (counter <= divider) {
            counter += 1;
            const recRes = chunkFinder(outputArr?.length ? arr?.filter(item => !outputArr[0]?.includes(item)) : arr, [], 0, checkValue, divider, 0)
            outputArr.push(recRes)


            LOG("recRes", index, recRes)
        } else {
            // outputArr.push();
            counter = 0;
        }
    };

    return outputArr;
};

const arr = [1, 3, 4, 8, 7, 9, 3, 5, 1];

LOG("Result", divideChunkArray(arr, 2, 3));
