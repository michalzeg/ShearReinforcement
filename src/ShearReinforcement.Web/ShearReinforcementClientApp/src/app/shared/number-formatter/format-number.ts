

export function formatNumber(inputNumber: number, separator = ' '): string {
    let decimalPart;
    let naturalPart;
    let number;
    const dotPosition = inputNumber.toString().indexOf('.');
    if (dotPosition !== -1) {
        number = inputNumber.toFixed(2);
        decimalPart = number.substr(dotPosition);
        naturalPart = number.substr(0, dotPosition);
    } else {
        number = inputNumber.toFixed(0);
        decimalPart = '';
        naturalPart = number;
    }
    const startNumber = naturalPart.length % 3;

    let result = '';

    for (let i = 0; i < startNumber; i++) {
        result = result + naturalPart[i];
    }
    if (startNumber !== 0) {
        result = result + separator;
    }

    let currentIndex = 0;
    for (let i = startNumber; i < naturalPart.length; i++) {
        const currentChar = naturalPart[i];
        result = result + currentChar;
        currentIndex++;
        if (currentIndex === 3 && i !== naturalPart.length - 1) {
            result = result + separator;
            currentIndex = 0;
        }
    }
    return result.trim() + decimalPart.toString();
}
