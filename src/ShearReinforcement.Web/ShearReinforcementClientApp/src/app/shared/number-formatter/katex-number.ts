import { formatNumber } from './format-number';


export function katexNumber(inputValue: number): string {
    return formatNumber(inputValue, '\\;');
}
