import { Results } from '../data/results';
import { BottomPanelOutput } from './bottom-panel-output';
import { EquationRow } from '../../shared/equation-row/equation-row';
import { katexNumber } from '../../shared/number-formatter/katex-number';

export function bottomPanelOutputConverter(results: Results): BottomPanelOutput {
    const result = <BottomPanelOutput>{};
    result.alfaCw = alfaCwConverter(results);
    result.cotTheta = cotThetaConverter(results);
    result.cotThetaCalcs = cotThetaCalcsConverter(results);
    result.fywd = fywdConverter(results);
    result.theta = thetaConverter(results);
    result.v1 = v1Converter(results);
    result.Vrdmax = VrdmaxConverter(results);
    result.Vrds = VrdsConverter(results);
    result.VrdsSummary = VrdsSummaryConverter(results);
    result.z = zConverter(results);

    return result;
}

function fywdConverter(results: Results): EquationRow {
    const result = {
        part1: 'f_{ywd}=',
        part2: '\\frac {f_{ywk}}{\\gamma_S}=',
        part3: '\\frac {' + results.fywk + ' }{' + results.gammaS + '}=' + results.fywd + '{N \\over mm^2}'
    };
    return result;
}

function zConverter(results: Results): EquationRow {
    const result = {
        part1: 'z=',
        part2: '0.9 \\cdot d=',
        part3: '0.9 \\cdot' + results.d + '=' + results.z + 'mm'
    };
    return result;
}

function v1Converter(results: Results): EquationRow {
    const result = {
        part1: 'v_1=',
        part2: '0.6 \\cdot [1 - \\frac{f_{ck}}{250}]=',
        part3: '0.6 \\cdot [1-\\frac{' + results.fck + '}{250}]=' + results.v1
    };
    return result;
}

function alfaCwConverter(results: Results): EquationRow {
    const part1 = '\\alpha_{cw}=';
    let part2 = '';
    let part3 = '';
    if (results.sigmacp <= 0.25 * results.fcd) {
        part2 = '(1+\\frac{\\sigma_{cp}}{f_{cd}})=';
        part3 = '(1+\\frac{' + results.sigmacp + '}{' + results.fcd + '})=' + results.alfaCw;
    } else if (0.25 * results.fcd < results.sigmacp && results.sigmacp <= 0.5 * results.fcd) {
        part2 = '' + results.sigmacp;
    } else {
        part2 = '2.5 \\cdot (1 - \\frac{\\sigma_{cp}}{f_{cd}})=';
        part3 = '2.5 \\cdot (1 - \\frac{' + results.sigmacp + '}{' + results.fcd + '})=' + results.alfaCw;
    }
    return {
        part1,
        part2,
        part3
    };
}

function thetaConverter(results: Results): EquationRow {
    const result = {
        part1: '\\theta=',
        part2: '\\frac{1}{2} \\cdot \\arcsin \\frac{2 \\cdot V_{Ed}}{\\alpha_{cw} \\cdot b_w \\cdot z \\cdot v_1 \\cdot f_{cd}}=',
        part3: '\\frac{1}{2} \\cdot \\arcsin \\frac{2 \\cdot' + katexNumber(results.ved) + '}{' +
            results.alfaCw + '\\cdot' + results.bw + '\\cdot' + results.z + '\\cdot' + results.v1 + '\\cdot' +
            results.fcd + '}=' + results.theta
    };
    return result;
}

function cotThetaConverter(results: Results): EquationRow {
    const result = {
        part1: '',
        part2: '\\cot \\theta_{min}=' + results.cotThetaMin + '\\leq \\cot \\theta=' + results.cotTheta +
            '\\leq \\cot \\theta_{max}=' + results.cotThetaMax,
        part3: ''
    };
    return result;
}

function cotThetaCalcsConverter(results: Results): EquationRow {
    const result = {
        part1: '',
        part2: '\\cot \\theta=' + results.cotThetaCalcs,
        part3: ''
    };
    return result;
}

function VrdmaxConverter(results: Results): EquationRow {
    const result = {
        part1: 'V_{Rd,max}=',
        part2: '\\frac{\\alpha_{cw} \\cdot b_w \\cdot z \\cdot v_1 \\cdot f_{cd}}{\\cot \\theta + \\tan \\theta}=',
        part3: '\\frac{' + results.alfaCw + '\\cdot' + results.bw + '\\cdot' + results.z + '\\cdot' +
            results.v1 + '\\cdot' + results.fcd + '}{' + results.cotThetaCalcs + '+' + results.tanTheta + '}=' +
            katexNumber(results.vrdmax) + 'N'
    };
    return result;
}

function VrdsConverter(results: Results): EquationRow {
    const result = {
        part1: 'V_{Rd,s}=',
        part2: '\\frac{A_{sw}}{s} \\cdot z \\cdot f_{ywd} \\cdot \\cot \\theta=',
        part3: '\\frac{' + results.asw + '}{' + results.s + '} \\cdot' + results.z + '\\cdot' +
            results.fywd + '\\cdot' + results.cotThetaCalcs + '=' + katexNumber(results.vrds) + 'N'
    };
    return result;
}

function VrdsSummaryConverter(results: Results): EquationRow {
    const result = {
        part1: 'V_{Ed}=' + katexNumber(results.ved) + 'N',
        part2: results.ved > results.vrds ? '>' : '\\leq ',
        part3: 'V_{Rd,s}=' + katexNumber(results.vrds) + 'N'
    };
    return result;
}
