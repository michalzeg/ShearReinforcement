import { InputData } from './input-data';
import { OutputData } from './output-data';

export class Results {

    ved: number;
    s: number;
    asw: number;
    bw: number;
    d: number;
    h: number;
    fywk: number;
    gammaS: number;
    fck: number;
    gammaC: number;
    asl: number;
    ned: number;
    k1: number;
    cotThetaMax: number;
    cotThetaMin: number;

    vrdc1: number;
    vrdc2: number;
    vrdc: number;
    crdc: number;
    sigmacp: number;
    vmin: number;
    fcd: number;
    ro1: number;
    k: number;

    theta: number;
    fywd: number;
    cotTheta: number;
    cotThetaCalcs: number;
    tanTheta: number;
    z: number;
    v1: number;
    alfaCw: number;
    vrds: number;
    vrdmax: number;
    noSolution: boolean;

    static create(input: InputData, output: OutputData): Results {
        const result = {
            ...input,
            ...output
        };
        return <Results>result;
    }

}
