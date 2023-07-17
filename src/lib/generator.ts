import type { WeightValueDistribution, InputData } from "./types";

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// weighted choice of distribution
// returning weight, value pair based on the selection 
// returns [10,10] is data is wrong
function valueChoice(distribution: Array<WeightValueDistribution>, share_map: number[]) {
    let selected_distribution = 0;
    if (share_map === undefined || share_map.length == 0 || distribution == undefined || distribution.length == 0) {
        return [10, 10]
    }
    if (distribution && distribution.length > 1) {
        const rnd_val = Math.floor(Math.random() * share_map[share_map.length -1])
        for (let i = 0; i < distribution.length; i++) {
            if (rnd_val < share_map[i])
                break;
            selected_distribution += 1;
        }
    }

    const val = getRandomInt(distribution[selected_distribution].val_low, distribution[selected_distribution].val_high);
    const weight = getRandomInt(distribution[selected_distribution].weight_low, distribution[selected_distribution].weight_high);

    return [weight, val]
}

export function GenerateShareMap(distribution: Array<WeightValueDistribution>): number[] {
    let res: number[] =  []
    let end_pos   = 0;
    let prev_end_pos = 0;

    if (!distribution) {
        return []
    }
    for (let i = 0; i < distribution.length; i++) {
        end_pos = prev_end_pos + distribution[i].share;
        res.push(end_pos);
        prev_end_pos = end_pos;
    }

    return res;
}

export function GenerateDataPoints(distribution: Array<WeightValueDistribution>, respondents_number: number, areas_number:number, criteria_number: number) {
    const res: InputData = new Array(respondents_number);
    const share_map = GenerateShareMap(distribution);
    for (let r = 0; r < respondents_number; r++) {
        res[r] = new Array(areas_number);
        for (let a = 0; a < areas_number; a++) {
            res[r][a] = new Array(criteria_number);
            for (let c = 0; c < criteria_number; c++) {
                res[r][a][c] = valueChoice(distribution, share_map)
            }
        }
    }
    return res;
}