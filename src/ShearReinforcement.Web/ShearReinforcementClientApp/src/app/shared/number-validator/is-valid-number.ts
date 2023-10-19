export function isValidNumber(value: number | null | undefined) {
    return value > 0 && Number.isFinite(value);
}
