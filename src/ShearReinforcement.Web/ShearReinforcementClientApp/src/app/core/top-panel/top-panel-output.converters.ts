import { EquationRow } from '../../shared/equation-row/equation-row';
import { TopPanelOutput } from './top-panel-output';
import { katexNumber } from '../../shared/number-formatter/katex-number';
import { Results } from '../data/results';



export function topPanelOutputConverter(results: Results): TopPanelOutput {
    const result = <TopPanelOutput>{};
    result.crdc = CrdcConverter(results);
    result.fcd = fcdConverter(results);
    result.k = kConverter(results);
    result.ro1 = ro1Converter(results);
    result.vmin = vminConverter(results);
    result.sigmacp = sigmacpConverter(results);
    result.vrdc11 = Vrdc11Converter(results);
    result.vrdc12 = Vrdc12Converter(results);
    result.vrdc2 = Vrdc2Converter(results);
    result.vrdc = VrdcConverter(results);
    result.ved = VedConverter(results);
    result.vrdcSummary = VrdcSummaryConverter(results);
    return result;
}


function CrdcConverter(results: Results): EquationRow {
    const result = {
        part1: `C_{Rd,c}=`,
        part2: `\\frac {0.18}{\\gamma_C}=`,
        part3: `\\frac {0.18}{${results.gammaC}}=${results.crdc}`
    };
    return result;
}

function fcdConverter(results: Results): EquationRow {
    const result = {
        part1: 'f_{cd}=',
        part2: '\\frac {f_{ck}}{\\gamma_S}=',
        part3: '\\frac {' + results.fck + ' }{' + results.gammaC + '}=' + results.fcd + '{N \\over mm^2}'
    };
    return result;
}

function kConverter(results: Results): EquationRow {
    const result = {
        part1: 'k=',
        part2: '1+ \\sqrt{\\frac{200}{d}}=',
        part3: '1+ \\sqrt{\\frac{200}{' + results.d + '}}=' + results.k + '\\leq 2.0'
    };
    return result;
}

function ro1Converter(results: Results): EquationRow {
    const result = {
        part1: '\\rho_I=',
        part2: '\\frac{A_{sl}}{b_w \\cdot d}=',
        part3: '\\frac{' + results.asl + '}{' + results.bw + '\\cdot ' + results.d + '}=' + results.ro1 + '\\leq 0.02'
    };
    return result;
}

function vminConverter(results: Results): EquationRow {
    const result = {
        part1: 'v_{min}=',
        part2: '0.035 \\cdot k^{3/2} \\cdot f_{ck}^{1/2}=',
        part3: '0.035 \\cdot' + results.k + '^{3/2} \\cdot ' + results.fck + '^{1/2}=' + results.vmin
    };
    return result;
}

function sigmacpConverter(results: Results): EquationRow {
    const result = {
        part1: '\\sigma_{cp}=',
        part2: '\\frac{N_{Ed}}{b_w \\cdot h}=',
        part3: '\\frac{' + katexNumber(results.ned) + '}{' + results.bw +
            '\\cdot' + results.h + '}=' + results.sigmacp + '{N \\over mm^2}'
    };
    return result;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Vrdc11Converter(results: Results): EquationRow {
    const result = {
        part1: 'V_{Rd,c1}=',
        part2: '[C_{Rd,c} \\cdot k \\cdot (100 \\cdot \\rho_I \\cdot f_{ck})^{1/3}+k_1 \\cdot \\sigma_{cp}] \\cdot b_w \\cdot d=...',
        part3: ''
    };
    return result;
}
function Vrdc12Converter(results: Results): EquationRow {
    const result = {
        part1: '',
        part2: '\\qquad \\quad \\!...=[' + results.crdc + ' \\cdot' + results.k + ' \\cdot (100 \\cdot ' + results.ro1 +
            ' \\cdot' + results.fck + '^{1/3}+' + results.k1 + ' \\cdot ' + results.sigmacp + '] \\cdot' + results.bw +
            '\\cdot' + results.d + '=' + katexNumber(results.vrdc1) + 'N',
        part3: ''
    };
    return result;
}

function Vrdc2Converter(results: Results): EquationRow {
    const result = {
        part1: 'V_{Rd,c2}=',
        part2: '(v_{min}+k_1 \\cdot \\sigma_{cp}) \\cdot b_w \\cdot d=',
        part3: '(' + results.vmin + '+' + results.k1 + ' \\cdot' + results.sigmacp +
            ') \\cdot' + results.bw + '\\cdot' + results.d + ' =' + katexNumber(results.vrdc2) + 'N'
    };
    return result;
}

function VrdcConverter(results: Results): EquationRow {
    const result = {
        part1: 'V_{Rd,c2}=',
        part2: '(v_{min}+k_1 \\cdot \\sigma_{cp}) \\cdot b_w \\cdot d=',
        part3: '(' + results.vmin + '+' + results.k1 + ' \\cdot' + results.sigmacp + ') \\cdot' +
            results.bw + '\\cdot' + results.d + ' =' + katexNumber(results.vrdc2) + 'N'
    };
    return result;
}
function VedConverter(results: Results): EquationRow {
    const result = {
        part1: 'V_{Rd,c}=',
        part2: 'max(V_{Rd,c1};V_{Rd,c2})=',
        part3: 'max(' + katexNumber(results.vrdc1) + ';' + katexNumber(results.vrdc2) + ')=' + katexNumber(results.vrdc) + 'N'
    };
    return result;
}

function VrdcSummaryConverter(results: Results): EquationRow {
    const result = {
        part1: 'V_{Ed}=' + katexNumber(results.ved) + 'N',
        part2: results.ved > results.vrdc ? '>' : '\\leq ',
        part3: 'V_{Rd,c}=' + katexNumber(results.vrdc) + 'N'
    };
    return result;
}
