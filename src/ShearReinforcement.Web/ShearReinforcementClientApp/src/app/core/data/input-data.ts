import almostEqual from 'almost-equal';

import { isValidNumber } from '../../shared/number-validator/is-valid-number';

export class InputData {
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

    get isValid(): boolean {
        const result = isValidNumber(this.ved)
            && isValidNumber(this.s)
            && isValidNumber(this.asw)
            && isValidNumber(this.bw)
            && isValidNumber(this.d)
            && isValidNumber(this.h)
            && isValidNumber(this.fywk)
            && isValidNumber(this.gammaS)
            && isValidNumber(this.fck)
            && isValidNumber(this.gammaC)
            && isValidNumber(this.asl)
            && isValidNumber(this.ned)
            && isValidNumber(this.k1);
        return result;
    }
}

export function InputDataEqualityComparer(input1: InputData, input2: InputData) {
    const isEqualNumber = (x: number, y: number) => <boolean>almostEqual(x, y);

    const isEqual = Object.keys(input1)
        .map(name => isEqualNumber(input1[name], input2[name]))
        .reduce((prev, next) => prev && next);

    return isEqual;
}

export const DefaultInputData: InputData = new InputData();
DefaultInputData.ved = 200000;
DefaultInputData.s = 100;
DefaultInputData.asw = 200;
DefaultInputData.bw = 300;
DefaultInputData.d = 200;
DefaultInputData.h = 300;
DefaultInputData.fywk = 500;
DefaultInputData.gammaS = 1.15;
DefaultInputData.fck = 30;
DefaultInputData.gammaC = 1.5;
DefaultInputData.asl = 200;
DefaultInputData.ned = 5000;
DefaultInputData.k1 = 0.15;
DefaultInputData.cotThetaMax = 2.5;
DefaultInputData.cotThetaMin = 1;


