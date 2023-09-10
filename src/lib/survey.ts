interface Respondent {
    name: string;
  }
  interface Subject {
    name: string;
  }

  interface Criterion {
    name: string;
  }

  interface DataPoint {
    value: number;
    weight: number;
  }

  interface CalculationResult {
    weightedAverage: number;
    standardError: number;
  }
  type DataMap = Map<[Respondent, Criterion, Subject], DataPoint>

  function randomIntFromInterval(min: number, max: number): number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  class Survey {
    subjects: Subject[];
    criteria: Criterion[];
    respondents: Respondent[];
    dataPoints: DataMap = {} as DataMap; 
    result: Map<[Criterion, Subject], CalculationResult> = {} as any;

    
    constructor(subject_names: string[], criteria_names: string[], respondent_names: string[]) {
        this.subjects = subject_names.map(name => (): Subject => ({ name: name }))
        this.criteria = criteria_names.map(name => (): Criterion => ({ name: name }))
        this.respondents = respondent_names.map(name => (): Respondent => ({ name: name }))
    }

    generateDataPoints(min_value: number, max_value: number, min_weight: number, max_weight: number) {
        this.dataPoints.clear();
        this.respondents.forEach(resp => {
            this.criteria.forEach(crit => {
                this.subjects.forEach(subj => {
                    this.dataPoints.set([resp, crit, subj], {value: randomIntFromInterval(min_value, max_value), weight: randomIntFromInterval(min_weight, max_weight)}); 
                });
            });
        });
    }
  }

export { Survey };
  