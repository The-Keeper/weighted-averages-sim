// returns the sum of weights and weigthed average of list of tuples
// credits to: https://gist.github.com/stekhn/a12ed417e91f90ecec14bcfa4c2ae16a?permalink_comment_id=4280449#gistcomment-4280449
export function weightedSumAverage(tupleArray: [number, number][]) { 
    const weightSum: number = tupleArray.reduce((accumulator, item) => accumulator + item[1], 0);
    const weightedAverage: number = tupleArray.reduce((accumulator, item) => accumulator + item[0] * item[1] / weightSum, 0);
    return { 'weightSum' : weightSum, 'weightedAverage': weightedAverage };
}

