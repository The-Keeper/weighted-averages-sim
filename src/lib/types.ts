export interface WeightValueDistribution {
    val_low: number;
    val_high: number;
    weight_low: number;
    weight_high: number;
    share: number;
}

export type DistributionData = Array<WeightValueDistribution>;
//                               weight  value  r a c
export type InputData        =  [number, number][][][]